import React from 'react';

const HeroVideoBackground: React.FC = () => {
  // User provided specific background image
  const BG_IMAGE_URL = "https://messages-prod.27c852f3500f38c1e7786e2c9ff9e48f.r2.cloudflarestorage.com/cac5669f-fc0b-4f34-80ae-914952152bf0/1764969374787-019af05e-7148-7f6f-a850-0aa5acba235f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=c774f9d56a46165f86a9757e83c2bbc3%2F20251205%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251205T211614Z&X-Amz-Expires=3600&X-Amz-Signature=6f79804798ff2dca1027065f812b18258a319f380a06bf88ea73d0d5a777d1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-primary">
      <img
        src={BG_IMAGE_URL}
        alt="Classic Homes Remodeling - Luxury Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* High contrast overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      {/* Subtle gradient at bottom for smooth visual transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default HeroVideoBackground;