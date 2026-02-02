
import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !muted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked by browser. User interaction needed."));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, muted]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <audio
        ref={audioRef}
        loop
        src= "/audio/Christina_Perri_-_Thousand_years_(mp3.pm).mp3"
      />
      <button
        onClick={() => setMuted(!muted)}
        className={`group relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 border-2 ${
          muted ? 'bg-white text-gray-400 border-gray-100' : 'bg-rose-500 text-white border-rose-400 animate-pulse'
        }`}
      >
        <span className="text-2xl">{muted ? '🔇' : '🎵'}</span>
        {!muted && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
          </span>
        )}
      </button>
      <span className="mt-2 text-[10px] uppercase tracking-widest text-rose-400 font-bold bg-white/80 px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm">
        {muted ? 'Music Paused' : 'Not Thousand, but One and a Half Years :)'}
      </span>
    </div>
  );
};

export default MusicPlayer;
