/* ========================================
   TAPE & CARTRIDGE
   Screen Effects
   ======================================== */

// Cryptic transmissions
const transmissions = [
  "we lost ourselves. let the bots find us.",
  "channel 3 remembers."
];

// Cycle through transmissions
function initTransmissions() {
  const el = document.querySelector('.transmission-text');
  if (!el) return;

  let index = Math.floor(Math.random() * transmissions.length);

  function glitch() {
    el.classList.add('glitch');
    setTimeout(() => el.classList.remove('glitch'), 300);
  }

  function showNext() {
    glitch();

    setTimeout(() => {
      el.classList.add('fade');

      setTimeout(() => {
        el.textContent = transmissions[index];
        el.classList.remove('fade');
        index = (index + 1) % transmissions.length;

        setTimeout(glitch, 100);
      }, 500);
    }, 300);
  }

  // Show first one immediately
  el.textContent = transmissions[index];
  index = (index + 1) % transmissions.length;

  // Random glitches
  setInterval(() => {
    if (Math.random() > 0.7) glitch();
  }, 3000);

  // Cycle every 6 seconds
  setInterval(showNext, 6000);
}

// Subtle screen flicker
function initFlicker() {
  const hero = document.querySelector('.hero-bg');
  if (!hero) return;

  setInterval(() => {
    if (Math.random() > 0.96) {
      hero.style.opacity = 0.97;
      setTimeout(() => {
        hero.style.opacity = 1;
      }, 50);
    }
  }, 100);
}

// Warm welcome in console
function initConsoleMessage() {
  console.log('%c▓▒░ TAPE & CARTRIDGE ░▒▓', 'color: #7BA3A8; font-size: 20px; font-weight: bold;');
  console.log('%cthe static remembers you', 'color: #D2691E; font-size: 14px;');
  console.log('%cSit down. The carpet\'s still soft.', 'color: #A89880; font-size: 12px;');
  console.log('%c' + transmissions[Math.floor(Math.random() * transmissions.length)], 'color: #666; font-size: 10px; font-style: italic;');
  console.log('%crewind@tapeandcartridge.com', 'color: #9FCFCF; font-size: 11px;');
}

// Wait for fonts to load before showing content
function initFontLoader() {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.body.classList.remove('loading');
    });
  } else {
    // Fallback for older browsers
    setTimeout(() => {
      document.body.classList.remove('loading');
    }, 500);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initFontLoader();
  initFlicker();
  initTransmissions();
  initConsoleMessage();
});
