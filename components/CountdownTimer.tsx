import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-12-02T23:59:59').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime(); // Initial call
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center bg-black/40 backdrop-blur-md border border-gold/30 rounded-lg px-4 py-2 text-gold mt-4 mb-6" role="timer" aria-label="Offer countdown">
      <Clock className="w-5 h-5 mr-3 text-gold animate-pulse" />
      <div className="flex space-x-4 text-sm md:text-base font-mono font-bold">
        <div className="flex flex-col items-center leading-none">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-80 font-sans">Days</span>
        </div>
        <span className="opacity-50">:</span>
        <div className="flex flex-col items-center leading-none">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-80 font-sans">Hrs</span>
        </div>
        <span className="opacity-50">:</span>
        <div className="flex flex-col items-center leading-none">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-80 font-sans">Min</span>
        </div>
        <span className="opacity-50">:</span>
        <div className="flex flex-col items-center leading-none">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-80 font-sans">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;