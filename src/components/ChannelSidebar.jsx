import { useRef, useEffect } from 'react';

export default function ChannelSidebar({
  channels, currentChannel, groups, selectedGroup,
  onGroupSelect, onChannelSelect,
}) {
  const activeRef = useRef(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [currentChannel, selectedGroup]);

  return (
    <div className="flex h-full w-72 bg-[#131318]/95 backdrop-blur-sm border-r border-white/5 shadow-2xl">
      {/* Group tabs */}
      <div className="flex flex-col gap-0.5 py-3 px-1 bg-[#0f0f13]/80 overflow-y-auto min-w-[80px] max-w-[80px]">
        {groups.map(g => (
          <button
            key={g}
            onClick={() => onGroupSelect(g)}
            className={`px-2 py-1.5 rounded text-[11px] font-medium text-left leading-tight transition-colors ${
              selectedGroup === g
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Channel list */}
      <div className="flex-1 overflow-y-auto py-2">
        {channels.length === 0 && (
          <p className="text-xs text-gray-500 text-center mt-8 px-4">Kanal bulunamadı.</p>
        )}
        {channels.map((ch, i) => {
          const isActive = currentChannel?.url === ch.url;
          return (
            <button
              key={ch.url + i}
              ref={isActive ? activeRef : null}
              onClick={() => onChannelSelect(ch)}
              className={`w-full text-left px-3 py-2 transition-colors flex flex-col gap-0.5 ${
                isActive
                  ? 'bg-indigo-600/30 border-l-2 border-indigo-400'
                  : 'border-l-2 border-transparent hover:bg-white/5'
              }`}
            >
              <span className={`text-sm font-medium leading-tight truncate ${isActive ? 'text-indigo-300' : 'text-gray-200'}`}>
                {ch.name}
              </span>
              <span className="text-[11px] text-gray-500 truncate">{ch.group}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}