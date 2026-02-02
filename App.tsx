
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import MemoryWall from './components/MemoryWall';
import Proposal from './components/Proposal';
import MusicPlayer from './components/MusicPlayer';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const goToNext = () => {
    const pages = Object.values(Page);
    const currentIndex = pages.indexOf(currentPage);
    
    // Start music on first interaction
    if (currentIndex === 0) {
      setIsMusicPlaying(true);
    }

    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-rose-50 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />
      <MusicPlayer isPlaying={isMusicPlaying} />
      
      {/* Dynamic Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-rose-100">
        <div 
          className="h-full bg-gradient-to-r from-rose-400 to-rose-600 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(225,29,72,0.5)]" 
          style={{ width: `${(Object.values(Page).indexOf(currentPage) + 1) / Object.values(Page).length * 100}%` }}
        />
      </div>

      <main className="transition-all duration-1000 ease-in-out">
        {currentPage === Page.Home && <Hero onStart={goToNext} />}
        
        {currentPage === Page.Letter && (
          <div className="animate-fade-in">
            <LoveLetter />
            <div className="flex justify-center pb-20">
              <button 
                onClick={goToNext} 
                className="bg-white px-10 py-4 rounded-full shadow-lg text-rose-500 font-bold hover:bg-rose-50 transition-all flex items-center group border border-rose-100 hover:scale-105 active:scale-95"
              >
                Continue the journey, Anumita <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        )}

        {currentPage === Page.Gallery && (
          <div className="animate-fade-in">
            <MemoryWall />
            <div className="flex justify-center pb-24">
              <button 
                onClick={goToNext} 
                className="bg-white px-10 py-4 rounded-full shadow-lg text-rose-500 font-bold hover:bg-rose-50 transition-all flex items-center group border border-rose-100 hover:scale-105 active:scale-95"
              >
                One last thing... <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        )}

        {currentPage === Page.Proposal && <Proposal />}
      </main>

      {/* Persistent Navigation Dots */}
      {currentPage !== Page.Home && currentPage !== Page.Proposal && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/40 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl border border-white/50 flex items-center space-x-8">
          {Object.values(Page).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`relative transition-all duration-500 group`}
              title={p.toUpperCase()}
            >
              <div className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
                currentPage === p ? 'bg-rose-500 scale-150 shadow-[0_0_15px_rgba(225,29,72,0.6)]' : 'bg-rose-200 hover:bg-rose-300'
              }`} />
              <span className={`absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-600 transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap`}>
                {p}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Aesthetic Accents */}
      <div className="fixed top-8 left-8 text-rose-200/40 text-8xl pointer-events-none z-0 select-none animate-pulse">✿</div>
      <div className="fixed bottom-8 right-8 text-rose-200/40 text-8xl pointer-events-none z-0 select-none animate-pulse delay-700">✿</div>
    </div>
  );
};

export default App;
