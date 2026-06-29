import { useState, useRef } from 'react';
import { X, Link2, Upload, RotateCcw, Check, AlertCircle } from 'lucide-react';

export default function SettingsPanel({
  settings, updateSetting,
  addChannelByUrl, addChannelsFromFile,
  resetChannels, onClose,
}) {
  const [urlInput, setUrlInput] = useState('');
  const [status, setStatus] = useState(null); // { type: 'success'|'error', msg }
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  const showStatus = (type, msg) => {
    setStatus({ type, msg });
    setTimeout(() => setStatus(null), 3500);
  };

  const handleUrlAdd = async () => {
    if (!urlInput.trim()) return;
    setLoading(true);
    const res = await addChannelByUrl(urlInput.trim());
    setLoading(false);
    if (res.success) {
      showStatus('success', `${res.count} kanal eklendi.`);
      setUrlInput('');
    } else {
      showStatus('error', res.error || 'Liste yüklenemedi.');
    }
  };

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const res = await addChannelsFromFile(file);
    setLoading(false);
    if (res.success) showStatus('success', `${res.count} kanal eklendi.`);
    else showStatus('error', 'Dosya okunamadı.');
    e.target.value = '';
  };

  const handleReset = () => {
    if (confirm('Eklenen tüm kanallar silinecek ve varsayılan listeye dönülecek. Emin misiniz?')) {
      resetChannels();
      showStatus('success', 'Varsayılan listeye dönüldü.');
    }
  };

  return (
    <div className="w-80 h-full bg-[#131318]/95 backdrop-blur-sm border-l border-white/5 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <h2 className="text-sm font-semibold text-white">Ayarlar</h2>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-6">

        {/* Font size */}
        <section>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Yazı Boyutu
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="12" max="20" step="1"
              value={settings.fontSize}
              onChange={e => updateSetting('fontSize', Number(e.target.value))}
              className="flex-1 accent-indigo-400 cursor-pointer"
            />
            <span className="text-sm text-gray-300 w-8 text-right">{settings.fontSize}px</span>
          </div>
          <div className="flex justify-between text-[11px] text-gray-600 mt-1">
            <span>Küçük</span><span>Büyük</span>
          </div>
        </section>

        {/* Add by URL */}
        <section>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            URL ile Liste Ekle
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={e => setUrlInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleUrlAdd()}
              placeholder="https://…/playlist.m3u8"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              onClick={handleUrlAdd}
              disabled={loading || !urlInput.trim()}
              className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white transition-colors flex items-center gap-1"
            >
              <Link2 className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Add by file */}
        <section>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Dosyadan Liste Ekle
          </label>
          <button
            onClick={() => fileRef.current?.click()}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-dashed border-white/15 hover:border-indigo-500/50 hover:bg-indigo-600/10 text-gray-400 hover:text-indigo-400 text-sm transition-colors disabled:opacity-40"
          >
            <Upload className="w-4 h-4" />
            <span>M3U / M3U8 Dosyası Seç</span>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".m3u,.m3u8,.txt"
            onChange={handleFile}
            className="hidden"
          />
        </section>

        {/* Reset */}
        <section>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Sıfırla
          </label>
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-red-600/15 hover:bg-red-600/25 text-red-400 hover:text-red-300 text-sm border border-red-600/20 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Varsayılana Dön</span>
          </button>
        </section>

        {/* Status */}
        {status && (
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
            status.type === 'success'
              ? 'bg-green-600/15 text-green-400 border border-green-600/20'
              : 'bg-red-600/15 text-red-400 border border-red-600/20'
          }`}>
            {status.type === 'success'
              ? <Check className="w-4 h-4 shrink-0" />
              : <AlertCircle className="w-4 h-4 shrink-0" />
            }
            <span>{status.msg}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/5 text-center">
        <p className="text-[11px] text-gray-600">NooXIPTV v1.0</p>
      </div>
    </div>
  );
}