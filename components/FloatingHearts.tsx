
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 10}s`,
        size: `${10 + Math.random() * 30}px`,
      };
      setHearts((prev) => [...prev.slice(-20), newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle text-rose-300 opacity-60"
          style={{
            left: heart.left,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
