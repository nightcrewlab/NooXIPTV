import { Settings2, Tv2 } from 'lucide-react';

export default function TopBar({ onSettingsToggle, settingsOpen }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
      {/* Logo */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <Tv2 className="w-5 h-5 text-indigo-400" />
        <span className="text-white font-bold tracking-wide text-sm">
          Noox<span className="text-indigo-400">IPTV</span>
        </span>
      </div>

      {/* Settings button */}
      <button
        onClick={onSettingsToggle}
        className={`pointer-events-auto w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
          settingsOpen
            ? 'bg-indigo-600 text-white'
            : 'bg-white/10 hover:bg-white/20 text-gray-300'
        }`}
        title="Ayarlar"
      >
        <Settings2 className="w-4 h-4" />
      </button>
    </div>
  );
}