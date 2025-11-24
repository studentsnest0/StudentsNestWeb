import { useEffect } from 'react';

function N8nChatWidget() {
  useEffect(() => {
    // Dynamically load the n8n chat widget script
    if (!window.N8NChatWidget) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/index.global.js';
      script.async = true;
      script.onload = () => {
        if (window.N8NChatWidget) {
          window.N8NChatWidget.init({
            apiBaseUrl: 'https://n8n.nafran.com/chat', // Change to your n8n chat endpoint
            theme: {
              color: '#5cbfc6',
              title: 'Chat with StudentsNest',
            },
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.N8NChatWidget.init({
        apiBaseUrl: 'https://n8n.nafran.com/chat',
        theme: {
          color: '#5cbfc6',
          title: 'Chat with StudentsNest',
        },
      });
    }
  }, []);

  return null; // Widget is injected globally
}

export default N8nChatWidget;
