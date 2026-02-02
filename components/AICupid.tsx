
import React, { useState } from 'react';
import { suggestDateIdea } from '../services/geminiService';

const AICupid: React.FC = () => {
  const [dateIdea, setDateIdea] = useState<{ title: string; description: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateDate = async (mood: string) => {
    setLoading(true);
    try {
      const result = await suggestDateIdea(mood);
      setDateIdea(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-rose-100 text-center">
        <h3 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">The Perfect Date Planner</h3>
        <p className="text-rose-600 mb-8 max-w-md mx-auto">
          Choose how you're feeling, and let's find the most magical way to spend our Valentine's Day together.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Adventurous', 'Cozy', 'Romantic', 'Budget-friendly', 'Luxurious', 'Spontaneous'].map((mood) => (
            <button
              key={mood}
              onClick={() => handleGenerateDate(mood)}
              disabled={loading}
              className="px-6 py-3 bg-white border-2 border-rose-100 rounded-full hover:border-rose-300 hover:bg-rose-50 transition-all text-rose-600 font-medium shadow-sm active:scale-95 disabled:opacity-50"
            >
              {mood}
            </button>
          ))}
        </div>

        {loading && (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="text-rose-500 font-medium animate-pulse">Dreaming up something special...</p>
          </div>
        )}

        {dateIdea && !loading && (
          <div className="mt-8 p-10 bg-white rounded-2xl shadow-inner border border-rose-100 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Your Custom Idea
            </div>
            <h4 className="text-3xl font-bold text-rose-700 mb-4">{dateIdea.title}</h4>
            <p className="text-gray-700 leading-relaxed text-lg italic">"{dateIdea.description}"</p>
            <div className="mt-6 flex justify-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="text-2xl">🍷</span>
              <span className="text-2xl">✨</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AICupid;
