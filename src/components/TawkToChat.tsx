import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Check if script is already there to prevent duplicates
    if (document.getElementById('tawk-to-script')) return;

    // Define Tawk_API on window to avoid TypeScript errors
    // @ts-ignore
    window.Tawk_API = window.Tawk_API || {};
    // @ts-ignore
    window.Tawk_LoadStart = new Date();

    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      
      s1.id = 'tawk-to-script';
      s1.async = true;
      s1.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null; // This component doesn't render anything visible itself
};

export default TawkToChat;
