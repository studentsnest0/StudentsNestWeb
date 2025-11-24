import { useEffect } from 'react';

function N8nWebhookChat() {
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        const mod = await import('@n8n/chat');
        const createChat = mod.createChat || mod.default?.createChat || mod.default;
        if (!mounted) return;
        if (typeof createChat !== 'function') {
          console.error('n8n chat: createChat not found in @n8n/chat module');
          return;
        }

        console.log('n8n chat: initializing via @n8n/chat (attempt target: body)');
        // Try mounting to body first (avoids container CSS hiding widget). Fallback to '#n8n-chat' below.
        createChat({
          webhookUrl: 'https://n8n.nafran.com/webhook/a3d29c2d-db41-4eed-973d-d56d4b32b7fa/chat',
          webhookConfig: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          },
          target: 'body',
          mode: 'window',
          chatInputKey: 'chatInput',
          chatSessionKey: 'sessionId',
          loadPreviousSession: true,
          metadata: {},
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            'My name is Nathan. How can I assist you today?'
          ],
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
        // Give the widget a little time to mount, then check whether any n8n elements exist.
        setTimeout(() => {
          const exists = document.querySelector('[data-n8n]') || document.querySelector('.n8n-chat') || document.querySelector('#n8n-chat') || document.querySelector('[id^="n8n"]');
          console.log('n8n chat: mount check, found element:', !!exists, exists);
          if (!exists) {
            console.warn('n8n chat: no widget DOM detected after mounting to body — retrying with target #n8n-chat');
            try {
              createChat({
                webhookUrl: 'https://n8n.nafran.com/webhook/a3d29c2d-db41-4eed-973d-d56d4b32b7fa/chat',
                webhookConfig: {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' }
                },
                target: '#n8n-chat',
                mode: 'window',
                chatInputKey: 'chatInput',
                chatSessionKey: 'sessionId',
                loadPreviousSession: true,
                metadata: {},
                showWelcomeScreen: false,
                defaultLanguage: 'en',
                initialMessages: [
                  'Hi there! 👋',
                  'My name is Nathan. How can I assist you today?'
                ],
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
              console.log('n8n chat: retried with #n8n-chat');
            } catch (e) {
              console.error('n8n chat: retry failed', e);
            }
          }
        }, 800);
        // Also add a periodic style fix to ensure the widget toggle/window stays bottom-right
        const applyStyleFix = () => {
          try {
            // widget wrapper
            const wrapper = document.querySelector('.chat-window-wrapper') || document.querySelector('.n8n-chat') || document.querySelector('#n8n-chat');
            if (wrapper) {
              wrapper.style.position = 'fixed';
              wrapper.style.bottom = '20px';
              wrapper.style.right = '20px';
              wrapper.style.left = 'auto';
              wrapper.style.top = 'auto';
              wrapper.style.zIndex = '2147483647';
            }

            // main chat window (may be display:none by default)
            const win = document.querySelector('.chat-window');
            if (win) {
              // do not force-open the chat if it should remain closed, but ensure toggle is visible
              win.style.left = 'auto';
              win.style.right = '0px';
            }

            // toggle button
            const toggle = document.querySelector('.chat-window-toggle') || document.querySelector('.chat-toggle') || document.querySelector('.chat-toggle-btn');
            if (toggle) {
              toggle.style.position = 'fixed';
              toggle.style.bottom = '20px';
              toggle.style.right = '20px';
              toggle.style.left = 'auto';
              toggle.style.top = 'auto';
              toggle.style.zIndex = '2147483648';
            }
          } catch (err) {
            console.debug('n8n chat: style-fix error', err);
          }
        };

        // run immediately and a few times to catch async styling
        applyStyleFix();
        const fixInterval = setInterval(applyStyleFix, 1200);
        setTimeout(() => clearInterval(fixInterval), 10000);
        // Inject CSS overrides as a stronger fallback (idempotent)
        try {
          if (!document.getElementById('n8n-style-override')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'n8n-style-override';
            styleEl.textContent = `
              .chat-window-wrapper.n8n-chat, .n8n-chat, #n8n-chat, .chat-window-toggle {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                left: auto !important;
                top: auto !important;
                z-index: 2147483647 !important;
              }
              .chat-window {
                /* Do not force the chat window open; only ensure correct placement when opened */
                right: 0 !important;
                left: auto !important;
                max-width: 420px !important;
                max-height: 80vh !important;
              }
              .chat-window-toggle {
                z-index: 2147483648 !important;
              }
            `;
            document.head.appendChild(styleEl);
            console.log('n8n chat: injected style override');
          }
        } catch (err) {
          console.debug('n8n chat: failed to inject style override', err);
        }

        // Restore any previous modifications we may have applied in earlier runs
        try {
          const modifiedEls = Array.from(document.querySelectorAll('[data-n8n-original-style]'));
          modifiedEls.forEach(el => {
            const original = el.getAttribute('data-n8n-original-style');
            if (original) el.setAttribute('style', original);
            else el.removeAttribute('style');
            el.removeAttribute('data-n8n-original-style');
          });
        } catch (err) {
          console.debug('n8n chat: restore previous styles failed', err);
        }

        // Find potential full-viewport overlay inserted by the widget and constrain it,
        // but explicitly ignore <html>, <body>, and the app root so we don't hide the page.
        try {
          let overlay = document.querySelector('main.chat-layout') || document.querySelector('.chat-layout') || document.querySelector('.chat-wrapper');
          if (!overlay) {
            // fallback: find any element that covers the viewport (but skip html/body/root)
            const els = Array.from(document.body.querySelectorAll('*'));
            overlay = els.find(el => {
              if (!el || !el.getBoundingClientRect) return false;
              if (el.tagName === 'HTML' || el.tagName === 'BODY') return false;
              if (el.id === 'root' || el.id === 'n8n-chat') return false;
              const r = el.getBoundingClientRect();
              return r.width >= window.innerWidth - 1 && r.height >= window.innerHeight - 1;
            });
          }

          if (overlay && overlay.tagName !== 'HTML' && overlay.tagName !== 'BODY') {
            console.log('n8n chat: found overlay element — constraining to avoid white-screen', overlay);
            // save original inline style for restore if needed
            overlay.setAttribute('data-n8n-original-style', overlay.getAttribute('style') || '');

            // Constrain overlay to small chat window but DO NOT hide the entire page
            overlay.style.position = 'fixed';
            overlay.style.bottom = '20px';
            overlay.style.right = '20px';
            overlay.style.left = 'auto';
            overlay.style.top = 'auto';
            overlay.style.width = '420px';
            overlay.style.maxHeight = '80vh';
            overlay.style.overflow = 'auto';
            overlay.style.zIndex = '2147483646';

            // Wire toggle to show/hide this overlay in a constrained way
            const toggle = document.querySelector('.chat-window-toggle') || document.querySelector('.chat-window-toggle-btn') || document.querySelector('.chat-window-toggle') || document.querySelector('.chat-toggle');
            if (toggle) {
              const onClick = () => {
                try {
                  const visible = overlay.getAttribute('data-n8n-visible') === 'true';
                  if (visible) {
                    overlay.style.display = 'none';
                    overlay.setAttribute('data-n8n-visible', 'false');
                  } else {
                    overlay.style.display = 'block';
                    overlay.setAttribute('data-n8n-visible', 'true');
                  }
                } catch (err) {
                  console.debug('n8n chat: toggle handler error', err);
                }
              };
              // ensure we don't add multiple listeners
              if (!toggle.dataset.n8nHasListener) {
                toggle.addEventListener('click', onClick);
                toggle.dataset.n8nHasListener = 'true';
              }
            }
          }
        } catch (err) {
          console.debug('n8n chat: overlay constrain failed', err);
        }
      } catch (err) {
        console.error('Failed to load @n8n/chat module:', err);
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, []);

  return null; // Widget is injected globally
}

export default N8nWebhookChat;
