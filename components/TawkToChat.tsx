import React, { useEffect } from 'react';

const TawkToChat: React.FC = () => {
  useEffect(() => {
    const scriptId = 'tawk-script';
    if (document.getElementById(scriptId)) return;

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.id = scriptId;
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    return () => {
      // Optional cleanup if necessary, though Tawk usually persists
    };
  }, []);

  return null;
};

export default TawkToChat;