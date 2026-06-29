import { useState, useCallback, useEffect } from 'react';
import { DEFAULT_CHANNELS } from '../data/defaultChannels';

const STORAGE_KEY = 'nooxiptv_extra_channels';
const SETTINGS_KEY = 'nooxiptv_settings';

// Parse M3U8 playlist text into channel objects
function parseM3U(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const channels = [];
  let i = 0;

  while (i < lines.length) {
    if (lines[i].startsWith('#EXTINF')) {
      const extLine = lines[i];
      const urlLine = lines[i + 1];
      if (!urlLine || urlLine.startsWith('#')) { i++; continue; }

      // Extract name (after last comma)
      const nameMatch = extLine.match(/,(.+)$/);
      const rawName = nameMatch ? nameMatch[1].trim() : 'Kanal';

      // Clean name — remove quality/geo notes
      const name = rawName
        .replace(/\s*\(\d+p\)/gi, '')
        .replace(/\s*\[Not 24\/7\]/gi, '')
        .replace(/\s*\[Geo-blocked\]/gi, '')
        .trim();

      // Extract group
      const groupMatch = extLine.match(/group-title="([^"]+)"/);
      let group = groupMatch ? groupMatch[1] : 'Genel';
      // Normalize group names to Turkish
      const groupMap = {
        General: 'Genel', News: 'Haber', Sports: 'Spor',
        Entertainment: 'Eğlence', Music: 'Müzik', Kids: 'Çocuk',
        Documentary: 'Belgesel', Movies: 'Film', Religious: 'Dini',
        Education: 'Eğitim', Business: 'İş/Ekonomi', Lifestyle: 'Yaşam',
        Undefined: 'Genel', Culture: 'Kültür', Animation: 'Animasyon',
      };
      group = groupMap[group] || group;

      channels.push({ name, group, url: urlLine });
      i += 2;
    } else {
      i++;
    }
  }
  return channels;
}

export function useIPTV() {
  const [channels, setChannels] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const extra = stored ? JSON.parse(stored) : [];
      return [...DEFAULT_CHANNELS, ...extra];
    } catch {
      return [...DEFAULT_CHANNELS];
    }
  });

  const [settings, setSettings] = useState(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_KEY);
      return stored ? JSON.parse(stored) : { fontSize: 15 };
    } catch {
      return { fontSize: 15 };
    }
  });

  const [currentChannel, setCurrentChannel] = useState(DEFAULT_CHANNELS[0]);
  const [selectedGroup, setSelectedGroup] = useState('Tümü');

  // Persist settings
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${settings.fontSize}px`);
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  // Add channels from M3U text
  const addChannelsFromText = useCallback((text) => {
    const parsed = parseM3U(text);
    if (parsed.length === 0) return { success: false, count: 0 };
    setChannels(prev => {
      const existingUrls = new Set(prev.map(c => c.url));
      const newOnes = parsed.filter(c => !existingUrls.has(c.url));
      const combined = [...prev, ...newOnes];
      // Store only extra channels (not defaults)
      const defaultUrls = new Set(DEFAULT_CHANNELS.map(c => c.url));
      const extras = combined.filter(c => !defaultUrls.has(c.url));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(extras));
      return combined;
    });
    return { success: true, count: parsed.length };
  }, []);

  // Add single channel by URL (fetch and parse)
  const addChannelByUrl = useCallback(async (url) => {
    try {
      const resp = await fetch(url);
      const text = await resp.text();
      if (text.includes('#EXTM3U')) {
        return addChannelsFromText(text);
      } else {
        // Single stream URL
        const name = url.split('/').pop().replace(/\.m3u8?$/, '') || 'Yeni Kanal';
        const ch = { name, group: 'Genel', url };
        setChannels(prev => {
          if (prev.some(c => c.url === url)) return prev;
          const combined = [...prev, ch];
          const defaultUrls = new Set(DEFAULT_CHANNELS.map(c => c.url));
          const extras = combined.filter(c => !defaultUrls.has(c.url));
          localStorage.setItem(STORAGE_KEY, JSON.stringify(extras));
          return combined;
        });
        return { success: true, count: 1 };
      }
    } catch (e) {
      return { success: false, count: 0, error: e.message };
    }
  }, [addChannelsFromText]);

  // Add channels from file
  const addChannelsFromFile = useCallback((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = addChannelsFromText(e.target.result);
        resolve(result);
      };
      reader.onerror = () => resolve({ success: false, count: 0 });
      reader.readAsText(file, 'utf-8');
    });
  }, [addChannelsFromText]);

  // Reset to defaults
  const resetChannels = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setChannels([...DEFAULT_CHANNELS]);
    setCurrentChannel(DEFAULT_CHANNELS[0]);
  }, []);

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  // Unique groups
  const groups = ['Tümü', ...Array.from(new Set(channels.map(c => c.group))).sort((a, b) => {
    const ORDER = ['Genel','Haber','Spor','Eğlence','Müzik','Çocuk','Belgesel','Film','Dini','Eğitim'];
    const ia = ORDER.indexOf(a); const ib = ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1; if (ib !== -1) return 1;
    return a.localeCompare(b, 'tr');
  })];

  const filteredChannels = selectedGroup === 'Tümü'
    ? channels
    : channels.filter(c => c.group === selectedGroup);

  return {
    channels,
    filteredChannels,
    currentChannel,
    setCurrentChannel,
    groups,
    selectedGroup,
    setSelectedGroup,
    addChannelByUrl,
    addChannelsFromFile,
    resetChannels,
    settings,
    updateSetting,
  };
}