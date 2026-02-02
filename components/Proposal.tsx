
import React, { useState } from 'react';

const Proposal: React.FC = () => {
  const [noPos, setNoPos] = useState({ top: '0px', left: '0px' });
  const [accepted, setAccepted] = useState(false);

  const moveButton = () => {
    const padding = 100;
    const x = Math.random() * (window.innerWidth - padding * 2) + padding;
    const y = Math.random() * (window.innerHeight - padding * 2) + padding;
    setNoPos({ top: `${y}px`, left: `${x}px` });
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-rose-500 text-white transition-all duration-1000">
        <div className="relative">
          <h2 className="text-7xl md:text-9xl font-cursive mb-6 animate-bounce drop-shadow-2xl">Yay! ❤️</h2>
          <div className="absolute -top-10 -right-10 text-4xl animate-ping">💖</div>
          <div className="absolute -bottom-10 -left-10 text-4xl animate-ping delay-300">💖</div>
        </div>
        <p className="text-2xl md:text-4xl max-w-2xl font-serif mt-8 leading-relaxed px-4">
          Anumita, you've made Harsh the luckiest man alive! <br /> 
          <span className="italic font-light opacity-90 mt-4 block">Together forever, starting now.</span>
        </p>
        <div className="mt-16 flex space-x-8 text-7xl md:text-8xl">
          <span className="animate-pulse">💍</span>
          <span className="animate-pulse delay-150">🌹</span>
          <span className="animate-pulse delay-300">🥂</span>
        </div>
        <p className="mt-12 text-rose-200 font-medium tracking-widest uppercase">Happy Valentine's Day, My Queen</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative z-10 overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-2xl w-full">
        <h2 className="text-5xl md:text-7xl font-serif text-rose-900 mb-12 leading-tight">
          Anumita, <br /> I have a question...
        </h2>
        
        <div className="p-10 md:p-16 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(255,182,193,0.3)] border-4 border-rose-100 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-50 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-50 rounded-full blur-2xl"></div>

          <p className="text-4xl md:text-6xl font-cursive text-rose-600 mb-14 leading-normal">
            Will you be my Valentine?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center relative min-h-[80px]">
            <button
              onClick={handleAccept}
              className="z-10 px-16 py-5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-bold text-2xl shadow-xl shadow-rose-200 hover:scale-110 hover:shadow-2xl transition-all active:scale-95"
            >
              YES!
            </button>
            
            <button
              onMouseEnter={moveButton}
              onClick={moveButton}
              style={noPos.top === '0px' ? {} : { 
                position: 'fixed', 
                top: noPos.top, 
                left: noPos.left, 
                zIndex: 100,
                transition: 'all 0.15s ease-out'
              }}
              className="px-12 py-5 bg-rose-50 text-rose-400 rounded-full font-bold text-2xl border-2 border-rose-100 transition-all hover:bg-rose-100"
            >
              No
            </button>
          </div>
        </div>
        
        <p className="mt-12 text-rose-300 font-light italic text-xl">
          From Harsh, with all his heart.
        </p>
      </div>
    </div>
  );
};

export default Proposal;
