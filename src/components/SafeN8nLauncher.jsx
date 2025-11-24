import { useState, useRef, useEffect } from 'react';

function SafeN8nLauncher() {
  const [visible, setVisible] = useState(false);
  const initializedRef = useRef(false);
  const containerId = 'n8n-safe-container';

  useEffect(() => {
    // ensure container exists
    let el = document.getElementById(containerId);
    if (!el) {
      el = document.createElement('div');
      el.id = containerId;
      document.body.appendChild(el);
    }
    // style it (idempotent)
    Object.assign(el.style, {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      left: 'auto',
      top: 'auto',
      width: '420px',
      maxHeight: '80vh',
      overflow: 'auto',
      zIndex: '2147483647',
      display: 'none',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      borderRadius: '12px',
      background: 'transparent'
    });

    // inject scoped styles for the n8n widget inside our container
    try {
      if (!document.getElementById('n8n-safe-styles')) {
        const s = document.createElement('style');
        s.id = 'n8n-safe-styles';
        s.textContent = `
          /* Scoped to our safe container */
          #${containerId} { background: transparent; }
          #${containerId} .chat-window-wrapper, #${containerId} .n8n-chat, #${containerId} .chat-layout { box-sizing: border-box; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; }
          #${containerId} .chat-window-wrapper, #${containerId} .chat-window { width: 100% !important; height: 100% !important; }
          #${containerId} .chat-window { display: block !important; background: white !important; border-radius: 12px !important; overflow: hidden !important; box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important; }
          #${containerId} .chat-header { background: linear-gradient(135deg,#5cbfc6 0%,#4a9ea5 100%) !important; color: #fff !important; padding: 12px 16px !important; font-weight:600 !important; }
          #${containerId} .chat-header { display:block !important; }
          #${containerId} .chat-header .chat-heading { margin: 0 0 6px 0 !important; }
          #${containerId} .chat-header h1 { margin: 0 !important; font-size: 22px !important; }
          #${containerId} .chat-body { background: #f8f9fa !important; padding: 12px !important; max-height: calc(80vh - 160px) !important; overflow-y: auto !important; display:flex; flex-direction:column; gap:10px; }
          #${containerId} .chat-footer, #${containerId} .chat-input { background: #fff !important; padding: 12px !important; }
          #${containerId} .chat-input textarea, #${containerId} textarea[data-test-id="chat-input"] { width: 100% !important; min-height: 44px !important; max-height: 140px !important; resize: vertical !important; border-radius: 20px !important; border: 1px solid #e1e8ed !important; padding: 10px 14px !important; }
          #${containerId} .chat-window-toggle { display: none !important; }

          /* Generic bubble styles for many possible class names */
          #${containerId} .message, #${containerId} .chat-message, #${containerId} .msg, #${containerId} .message-item, #${containerId} [data-message] { display:flex; }
          #${containerId} .message .bubble, #${containerId} .message-bubble, #${containerId} .bubble, #${containerId} .msg-content, #${containerId} .chat-bubble { max-width: 75% !important; padding: 10px 14px !important; border-radius: 16px !important; line-height:1.3 !important; }

          /* Bot messages: left */
          #${containerId} .message-bot, #${containerId} .bot, #${containerId} .from-bot, #${containerId} .message--bot, #${containerId} .msg--bot, #${containerId} .n8n-bot, #${containerId} .assistant { justify-content: flex-start !important; }
          #${containerId} .message-bot .message-bubble, #${containerId} .bot .bubble, #${containerId} .assistant .chat-bubble { background: #fff !important; color: #222 !important; border: 1px solid #e1e8ed !important; border-bottom-left-radius:4px !important; }

          /* User messages: right */
          #${containerId} .message-user, #${containerId} .user, #${containerId} .from-user, #${containerId} .message--user, #${containerId} .msg--user, #${containerId} .n8n-user, #${containerId} .you { justify-content: flex-end !important; }
          #${containerId} .message-user .message-bubble, #${containerId} .user .bubble, #${containerId} .you .chat-bubble { background: linear-gradient(135deg,#5cbfc6 0%,#4a9ea5 100%) !important; color: #fff !important; border-bottom-right-radius:4px !important; }

          /* Fallback: align messages by alternating order (odd=bot left, even=user right) */
          #${containerId} .chat-body > * { display:flex; }
          #${containerId} .chat-body > *:nth-child(odd) { justify-content: flex-start !important; }
          #${containerId} .chat-body > *:nth-child(even) { justify-content: flex-end !important; }
          #${containerId} .chat-body > * .bubble, #${containerId} .chat-body > * .message-bubble, #${containerId} .chat-body > * > * { max-width: 75% !important; }
          /* Specific selectors used by the n8n chat package */
          #${containerId} .chat-message { display:flex; width:100% !important; box-sizing: border-box; }
          #${containerId} .chat-messages-list { display:flex !important; flex-direction: column !important; gap: 10px !important; }
          #${containerId} .chat-message-from-bot { justify-content: flex-start !important; }
          #${containerId} .chat-message-from-user { justify-content: flex-end !important; }
          #${containerId} .chat-message-markdown { display: inline-block !important; max-width: 75% !important; padding: 10px 14px !important; border-radius: 12px !important; background: #fff !important; border: 1px solid #e1e8ed !important; word-break: break-word !important; white-space: normal !important; }
          #${containerId} .chat-message-from-user .chat-message-markdown { background: linear-gradient(135deg,#5cbfc6 0%,#4a9ea5 100%) !important; color: #fff !important; }
          /* Ensure header + layout don't create multi-column flows */
          #${containerId} .chat-layout, #${containerId} .chat-wrapper { display: block !important; }
          #${containerId} .chat-header { width: 100% !important; }
        `;
        document.head.appendChild(s);
      }
    } catch (err) {
      console.error('n8n safe styles injection failed', err);
    }

    return () => {
      // keep the container (do not remove) but reset display when unmounting
      const c = document.getElementById(containerId);
      if (c) c.style.display = 'none';
    };
  }, []);

  const openChat = async () => {
    try {
      const mod = await import('@n8n/chat');
      const createChat = mod.createChat || mod.default?.createChat || mod.default;
      if (typeof createChat !== 'function') {
        console.error('n8n chat: createChat not found in @n8n/chat module');
        return false;
      }

      createChat({
        webhookUrl: 'https://n8n.nafran.com/webhook/a3d29c2d-db41-4eed-973d-d56d4b32b7fa/chat',
        webhookConfig: { method: 'POST', headers: { 'Content-Type': 'application/json' } },
        target: `#${containerId}`,
        // do not force full-screen/window behavior — let the library render into the container
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: ['Hi there! 👋', 'Welcome to StudentsNest. How can we assist you today?'],
        i18n: {
          en: {
            title: 'Hi there! 👋',
            subtitle: "Start a chat. We're here to help you 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
          },
        },
        enableStreaming: false,
      });

      // After library mounts it may set inline styles (display:none) on .chat-window.
      // Force it visible inside our constrained container so users see the chat when they open.
      const win = document.querySelector(`#${containerId} .chat-window`);
      if (win) {
        win.style.display = 'block';
      }

      initializedRef.current = true;
      return true;
    } catch (err) {
      console.error('n8n chat: failed to load or init', err);
      return false;
    }
  };

  const toggle = async () => {
    const container = document.getElementById(containerId);
    if (!initializedRef.current) {
      const ok = await openChat();
      if (!ok) return;
      // show container
      if (container) container.style.display = 'block';
      setVisible(true);
      return;
    }

    if (container) {
      const isHidden = container.style.display === 'none' || getComputedStyle(container).display === 'none';
      container.style.display = isHidden ? 'block' : 'none';
      // also toggle the inner .chat-window if present
      const win = container.querySelector('.chat-window');
      if (win) {
        win.style.display = isHidden ? 'block' : 'none';
      }
      setVisible(isHidden);
    } else {
      setVisible(!visible);
    }
  };

  return (
    <>
      <button
        aria-label="Open chat"
        onClick={toggle}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#5cbfc6 0%,#4a9ea5 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 2147483648,
        }}
      >
        Chat
      </button>
    </>
  );
}

export default SafeN8nLauncher;
