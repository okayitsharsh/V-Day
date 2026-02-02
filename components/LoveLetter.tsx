
import React, { useState } from 'react';

const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 relative z-10">
      <h2 className="text-4xl font-serif text-rose-900 mb-12">A Special Note</h2>
      
      <div 
        className={`relative w-full max-w-md transition-all duration-700 ${isOpen ? 'mt-32' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Envelope Body */}
        <div className="relative h-64 bg-rose-100 border-2 border-rose-200 rounded-b-lg shadow-2xl overflow-hidden cursor-pointer">
          {/* Paper / Letter Content */}
          <div 
            className={`absolute left-4 right-4 bg-white p-8 rounded shadow-inner transition-all duration-1000 ease-in-out transform ${isOpen ? '-translate-y-64 opacity-100 h-96' : 'translate-y-0 opacity-0 h-0'}`}
          >
            <div className="h-full overflow-y-auto font-serif text-gray-800 space-y-4">
              <p className="font-cursive text-3xl text-rose-600">Dearest Anumita,</p>
              <p className="leading-relaxed">
                ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------.
              </p>
              <p className="leading-relaxed">
                Anumita, I just want to tell you that I am so lucky to have you by me. May God give us all the happiness together. Thank you for being you!
              </p>
              <p className="font-cursive text-3xl text-rose-600 text-right">With all my love,<br/>Harsh</p>
            </div>
          </div>

          {/* Envelope Front (V-shape) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
             <div className="absolute inset-0 border-[32px] border-transparent border-t-rose-200 opacity-50"></div>
          </div>
        </div>

        {/* Envelope Flap */}
        <div 
          className={`absolute top-0 left-0 right-0 h-32 bg-rose-200 border-x-2 border-rose-300 rounded-t-lg transition-transform duration-700 origin-bottom z-30 cursor-pointer ${isOpen ? 'rotate-x-180 -translate-y-full' : ''}`}
          style={{ transformStyle: 'preserve-3d', transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)' }}
        >
          {!isOpen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse border-2 border-white">
                <span className="text-white text-2xl">❤️</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {!isOpen && (
        <p className="mt-8 text-rose-600 italic animate-pulse font-medium">Anumita, click to open your letter...</p>
      )}
    </div>
  );
};

export default LoveLetter;
