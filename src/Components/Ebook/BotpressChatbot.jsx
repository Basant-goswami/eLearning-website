import React, { useEffect } from 'react';

const BotpressChatbot = () => {
  useEffect(() => {

    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/f8dc7c18-a3b6-40c3-88a1-c5dd5fde3daa/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="webchat"/>;
};

export default BotpressChatbot;
