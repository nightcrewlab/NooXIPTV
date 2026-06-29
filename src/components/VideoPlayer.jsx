import { useEffect, useRef, useState, useCallback } from 'react';
import Hls from 'hls.js';
import {
  Maximize2, Minimize2, Volume2, VolumeX, Play, Pause,
  Loader2, AlertCircle, Settings2, ChevronDown
} from 'lucide-react';

export default function VideoPlayer({ channel }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimerRef = useRef(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showControls, setShowControls] = useState(true);
  const [qualities, setQualities] = useState([]);
  const [currentQuality, setCurrentQuality] = useState(-1); // -1 = auto
  const [showQualityMenu, setShowQualityMenu] = useState(false);

  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !channel?.url) return;

    setLoading(true);
    setError(null);
    setQualities([]);
    setCurrentQuality(-1);

    // Destroy previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const url = channel.url;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        xhrSetup: (xhr) => {
          xhr.withCredentials = false;
        },
      });
      hlsRef.current = hls;

      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
        setLoading(false);
        // Build quality levels
        if (data.levels && data.levels.length > 1) {
          const lvls = data.levels.map((l, i) => ({
            index: i,
            label: l.height ? `${l.height}p` : `Kalite ${i + 1}`,
          }));
          setQualities([{ index: -1, label: 'Otomatik' }, ...lvls]);
        }
        video.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          setLoading(false);
          setError('Kanal yüklenemedi. Akış şu anda mevcut olmayabilir.');
        }
      });

      hls.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
        setCurrentQuality(data.level);
      });

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = url;
      video.addEventListener('loadedmetadata', () => {
        setLoading(false);
        video.play().catch(() => {});
      }, { once: true });
      video.addEventListener('error', () => {
        setLoading(false);
        setError('Kanal yüklenemedi.');
      }, { once: true });
    } else {
      setError('Tarayıcınız HLS formatını desteklemiyor.');
      setLoading(false);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [channel]);

  // Fullscreen listener
  useEffect(() => {
    const onFSChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFSChange);
    return () => document.removeEventListener('fullscreenchange', onFSChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setIsPlaying(true); }
    else { video.pause(); setIsPlaying(false); }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value);
    videoRef.current.volume = v;
    setVolume(v);
    setIsMuted(v === 0);
  };

  const setQuality = (index) => {
    if (hlsRef.current) {
      hlsRef.current.currentLevel = index;
      setCurrentQuality(index);
    }
    setShowQualityMenu(false);
  };

  const currentQualityLabel = qualities.find(q => q.index === currentQuality)?.label
    ?? (qualities.length > 0 ? 'Otomatik' : '');

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black flex items-center justify-center select-none"
      onMouseMove={resetControlsTimer}
      onMouseLeave={() => clearTimeout(controlsTimerRef.current)}
      onClick={() => { resetControlsTimer(); setShowQualityMenu(false); }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setLoading(true)}
        onPlaying={() => setLoading(false)}
        playsInline
      />

      {/* Loading spinner */}
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 gap-3">
          <Loader2 className="w-10 h-10 text-indigo-400 animate-spin" />
          <span className="text-sm text-gray-300">Kanal yükleniyor…</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-3 px-6 text-center">
          <AlertCircle className="w-10 h-10 text-red-400" />
          <p className="text-sm text-red-300">{error}</p>
          <button
            onClick={(e) => { e.stopPropagation(); window.location.reload(); }}
            className="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs transition-colors"
          >
            Yenile
          </button>
        </div>
      )}

      {/* Channel name overlay (top) */}
      <div
        className={`absolute top-0 left-0 right-0 flex items-start px-4 pt-3 pb-6 bg-gradient-to-b from-black/70 to-transparent pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
      >
        <div>
          <p className="text-xs text-indigo-400 font-semibold tracking-widest uppercase">Şu An İzleniyor</p>
          <p className="text-white font-bold text-base leading-tight">{channel?.name}</p>
          <p className="text-xs text-gray-400">{channel?.group}</p>
        </div>
      </div>

      {/* Bottom controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white"
            title={isPlaying ? 'Duraklat' : 'Oynat'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Volume */}
          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white"
            title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
          >
            {isMuted || volume === 0
              ? <VolumeX className="w-4 h-4" />
              : <Volume2 className="w-4 h-4" />
            }
          </button>
          <input
            type="range"
            min="0" max="1" step="0.02"
            value={isMuted ? 0 : volume}
            onChange={handleVolume}
            className="w-20 h-1 accent-indigo-400 cursor-pointer"
            title="Ses"
          />

          <div className="flex-1" />

          {/* Quality selector */}
          {qualities.length > 1 && (
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setShowQualityMenu(v => !v); }}
                className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs transition-colors"
                title="Kalite Seç"
              >
                <Settings2 className="w-3 h-3" />
                <span>{currentQualityLabel}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {showQualityMenu && (
                <div className="absolute bottom-9 right-0 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-xl min-w-[90px] z-50">
                  {qualities.map(q => (
                    <button
                      key={q.index}
                      onClick={(e) => { e.stopPropagation(); setQuality(q.index); }}
                      className={`w-full px-3 py-1.5 text-left text-xs hover:bg-indigo-600/40 transition-colors ${currentQuality === q.index ? 'text-indigo-300 font-semibold' : 'text-gray-300'}`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white"
            title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}