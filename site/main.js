/* ============================================================
   TOUCH_GRASS — YOUR DISOBEDIENT SYSTEM
   HEAD Genève Media Design × Bureau 1217

   Four blocks. Keep them. Be able to explain each one.
     01 SIGNAL     — what it senses
     02 RULE       — what it does with it
     03 BEHAVIOUR  — how it lives
     04 STORY      — what we understand

   The example below: a creature that depends on the wind in Geneva
   (Open-Meteo, no API key). Replace it with your own system.

   Simulation:  ?simulate=calm | windy | storm | absent
   Debug panel: ?debug
   ============================================================ */


/* ------------------------------------------------------------
   01 · SIGNAL — what it senses
   Where does it come from? How often? What if it's missing?
   ------------------------------------------------------------ */

const SIGNAL = {
  name: 'wind speed (km/h)',
  every: 10 * 60 * 1000, // ask every 10 minutes — not more: every request costs something
  url: 'https://api.open-meteo.com/v1/forecast?latitude=46.2044&longitude=6.1432&current=wind_speed_10m',

  // Returns a number, or null when the signal is absent.
  async read() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) return null;
      const data = await response.json();
      return data.current.wind_speed_10m;
    } catch (error) {
      return null; // no network, API down… → the "absent" state
    }
  },

  // Fake values for each state, used by ?simulate=
  simulated: { calm: 5, windy: 25, storm: 55, absent: null },
};


/* ------------------------------------------------------------
   02 · RULE — what it does with it
   Thresholds, durations, memory. Say it in one sentence:
   "Above 40 km/h for 10 minutes, the creature is in a storm."
   ------------------------------------------------------------ */

const RULE = {
  states: ['calm', 'windy', 'storm', 'absent'],
  stormAbove: 40,   // km/h
  windyAbove: 15,   // km/h
  stormAfter: 10 * 60 * 1000, // the wind must stay strong for 10 minutes

  decide(value, memory) {
    if (value === null) return 'absent';
    if (value > this.stormAbove) {
      memory.strongSince = memory.strongSince || Date.now();
      if (Date.now() - memory.strongSince >= this.stormAfter) return 'storm';
      return 'windy';
    }
    memory.strongSince = null;
    if (value > this.windyAbove) return 'windy';
    return 'calm';
  },
};


/* ------------------------------------------------------------
   03 · BEHAVIOUR — how it lives
   What does each state change in what the website can DO?
   Not only how it looks: access, speed, content, existence.
   Make resources visible: when something runs low, we should feel it.
   ------------------------------------------------------------ */

const BEHAVIOUR = {
  calm() {
    document.documentElement.style.setProperty('--speed', '5s');
    pieces().forEach((p) => { p.classList.remove('broken'); p.style.transform = ''; });
  },
  windy() {
    document.documentElement.style.setProperty('--speed', '1.5s');
  },
  storm() {
    // Pieces break off to the side. Fewer things to animate = lighter page.
    pieces().slice(1).forEach((p, i) => {
      p.classList.add('broken');
      p.style.transform = `translate(${180 + i * 60}%, ${-40 + i * 50}%) rotate(${20 + i * 25}deg) scale(.4)`;
    });
  },
  absent() {
    // Hold still in the last known state. Don't pretend.
  },
};


/* ------------------------------------------------------------
   04 · STORY — what we understand
   Why did your website touch grass? What does the visitor feel?
   ------------------------------------------------------------ */

const STORY = {
  calm: 'The air is still. I can breathe.',
  windy: 'The bise is rising. I hold on.',
  storm: 'I am losing pieces of myself. Come back when it is calm.',
  absent: "I can't feel the wind.",
};


/* ============================================================
   ENGINE — you don't need to change this part
   ============================================================ */

const params = new URLSearchParams(location.search);
const simulate = params.get('simulate');
const memory = loadMemory();
let timer = null;

function pieces() {
  return [...document.querySelectorAll('.piece')];
}

function loadMemory() {
  try { return JSON.parse(localStorage.getItem('touch-grass-memory')) || {}; }
  catch { return {}; }
}
function saveMemory() {
  try { localStorage.setItem('touch-grass-memory', JSON.stringify(memory)); } catch {}
}

async function tick() {
  const simulated = simulate && simulate in SIGNAL.simulated;
  const value = simulated ? SIGNAL.simulated[simulate] : await SIGNAL.read();
  const state = simulated ? simulate : RULE.decide(value, memory);

  document.body.dataset.state = state;
  BEHAVIOUR[state]?.();
  document.getElementById('story').textContent = STORY[state] ?? '';
  memory.lastState = state;
  memory.lastValue = value;
  memory.lastTime = Date.now();
  saveMemory();
  updateDebug(value, state, simulated ? 'simulation' : 'live');
}

function updateDebug(value, state, source) {
  const panel = document.getElementById('debug');
  if (!params.has('debug') && !simulate) return;
  panel.hidden = false;
  document.getElementById('debug-signal').textContent = value === null ? 'absent' : `${value} · ${SIGNAL.name}`;
  document.getElementById('debug-state').textContent = state;
  document.getElementById('debug-source').textContent = source;
  const nav = document.getElementById('debug-states');
  nav.innerHTML = RULE.states
    .map((s) => `<a href="?simulate=${s}" ${s === state ? 'aria-current="true"' : ''}>${s}</a>`)
    .join('') + '<a href="?debug">live</a>';
}

// Resources: stop asking for the signal when nobody is looking.
function start() { tick(); timer = setInterval(tick, SIGNAL.every); }
function stop() { clearInterval(timer); timer = null; }
document.addEventListener('visibilitychange', () => (document.hidden ? stop() : !timer && start()));

start();
