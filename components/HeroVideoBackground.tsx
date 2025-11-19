import { useEffect, useState } from 'react';

export default function HeroVideoBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 bg-[#0F172A]">
        <img
          src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
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
        <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-corridor-with-columns-31892-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
