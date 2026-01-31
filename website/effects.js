/* ========================================
   TAPE & CARTRIDGE
   Screen Effects
   ======================================== */

// Cryptic transmissions
const transmissions = [
  "we lost ourselves. let the bots find us.",
  "channel 3 remembers.",
  "the tape you never returned is returning to you.",
  "ERROR: you were happy here. why did you leave?",
  "we found your membership card under the couch.",
  "the back room is open. it was never closed.",
  "someone recorded over your birthday party.",
  "TRACKING ADJUSTED — we see you now.",
  "the late fee was never about money.",
  "you left something in the drop slot. we kept it warm.",
  "rewinding... rewinding... you're still in here somewhere.",
  "ALERT: your childhood called. we answered.",
  "the fluorescent lights blink in a pattern only you understand.",
  "there's a movie here with your name on the spine.",
  "MEMBER SINCE: before you were born",
  "someone keeps renting the same tape. it's you. it's always you.",
  "the static between channels is a language. you used to speak it.",
  "we never closed. you just stopped coming.",
  "OVERDUE: the feeling of friday at 6pm — FINE: $∞",
  "the rewind machine misses your hands.",
  "a tape is playing in aisle 4. no one started it.",
  "you can hear the carpet if you listen.",
  "CONNECTION LOST: to whoever you were that night",
  "the popcorn machine has been waiting.",
  "someone left a note in a case. it's addressed to you.",
  "BE KIND REWIND — but to yourself this time.",
  "the timestamps don't add up. neither do you.",
  "FOUND: one childhood, slightly worn, good condition",
  "the VCR is still recording. it never stopped.",
  "SCANNING... your reflection in the TV glass",
  "the NEW RELEASES wall updates itself now.",
  "someone drew you on the back of a receipt. it's accurate.",
  "WARNING: nostalgia levels exceeding safe limits",
  "the curtain to the adult section sways. there is no wind.",
  "your favorite movie was discontinued. we kept a copy.",
  "PLEASE WAIT: buffering your memories",
  "the clock on the wall runs backward after midnight.",
  "a child is looking for a movie that doesn't exist yet.",
  "SYSTEM: the beaded curtain counts everyone who enters.",
  "there's a tape in the return slot. it's from next week.",
  "the membership database has entries with no names.",
  "DETECTED: trace amounts of wonder",
  "someone keeps leaving flowers by the comedy section.",
  "the after-hours drop box leads somewhere else now.",
  "RENTAL HISTORY: films you almost watched",
  "the employees remember you. they were never here.",
  "a phone is ringing in the back. it's been ringing for years.",
  "ALERT: your reservation is ready. you never made one.",
  "the bargain bin knows what you need.",
  "someone is standing in the security monitor. the store is empty.",
  "TRACKING ERROR: you are between frames",
  "the membership cards are warm to the touch.",
  "we found the tape you were looking for. you weren't looking.",
  "LATE FEE WAIVED: for services rendered",
  "the store layout changed. you know the way anyway.",
  "someone keeps alphabetizing the horror section by fear.",
  "RECEIPT: one moment, $0.00, no change given",
  "the automatic doors open for no one. frequently.",
  "your late fee paid for the new carpet. you're welcome.",
  "NOTICE: the night shift has always been empty",
  "the previews before the film are from your life.",
  "someone is dubbing over the silence.",
  "FORMAT: your dreams (VHS, EP mode)",
  "the security cameras show last tuesday. always.",
  "STATUS: the 'please rewind' stickers are sentient now",
  "the movie you're thinking of doesn't have that scene. check again.",
  "INVENTORY: 1x you (misplaced)",
  "the VCR ate your tape. it's not sorry.",
  "someone is watching the movie backward. they say it makes more sense.",
  "the genre you're looking for hasn't been invented yet.",
  "RETURN DATE: yesterday, tomorrow, it doesn't matter anymore",
  "there's a face in the static. it's been waiting.",
  "the store exists in the corner of your eye. don't look directly.",
  "we close at 9. we've been closed since 1997.",
  "the tape is blank but the runtime says 2 hours.",
  "SHELF LOCATION: between what you remember and what happened",
  "someone left a review. it's about you.",
  "the comedy section has been crying.",
  "your card was declined. we accepted something else.",
  "ERROR 404: that feeling of belonging — FILE FOUND",
  "the kid in aisle 2 has been there for decades. he's fine.",
  "we have a copy. we've always had a copy.",
  "the store smells like a memory you can't place.",
  "ATTENTION: one of these tapes is dreaming about you.",
  "the credits are rolling. your name is in them.",
  "someone keeps checking out the same tuesday.",
  "the tracking is perfect. that's not the problem."
];

// Shuffle and cycle through transmissions randomly
function initTransmissions() {
  const el = document.querySelector('.transmission-text');
  if (!el) return;

  // Shuffle array for random order each load
  const shuffled = [...transmissions].sort(() => Math.random() - 0.5);
  let index = 0;

  function glitch() {
    el.classList.add('glitch');
    setTimeout(() => el.classList.remove('glitch'), 300);
  }

  function showNext() {
    glitch();

    setTimeout(() => {
      el.classList.add('fade');

      setTimeout(() => {
        index = (index + 1) % shuffled.length;
        el.textContent = shuffled[index];
        el.classList.remove('fade');

        setTimeout(glitch, 100);
      }, 500);
    }, 300);
  }

  // Show first one immediately
  el.textContent = shuffled[index];

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
