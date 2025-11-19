import { useEffect, useState } from 'react';

export default function HeroVideoBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 bg-[#0F172A]">
        <img 
          src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="https://cdn.coverr.co/videos/coverr-elegant-living-room-6829/1080p.mp4" type="video/mp4" />
        {/* Fallback poster */}
        <img src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" className="w-full h-full object-cover" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
