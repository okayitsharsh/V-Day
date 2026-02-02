
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
      <div className="animate-bounce mb-8">
        <div className="w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center shadow-xl shadow-rose-200">
          <span className="text-5xl">💝</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-6 leading-tight">
        A Digital Bouquet <br />
        <span className="text-rose-500 font-cursive italic underline decoration-rose-200 underline-offset-8">For My Anumita</span>
      </h1>
      <p className="text-rose-700 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed font-light">
        Every moment with you is a gift I cherish. I've built this little corner of the internet to tell you how much you mean to me, my love.
      </p>
      <button
        onClick={onStart}
        className="group relative px-10 py-5 bg-rose-500 text-white rounded-full font-semibold text-xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-4 border-rose-700 hover:border-b-2 hover:translate-y-[2px]"
      >
        <span className="relative z-10 flex items-center">
          Open Harsh's Heart <span className="ml-2">✨</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-400 transform translate-y-full transition-transform group-hover:translate-y-0" />
      </button>
    </div>
  );
};

export default Hero;
