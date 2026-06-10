const nameInput    = document.getElementById('nameInput');
const ageInput     = document.getElementById('ageInput');
const celebrateBtn = document.getElementById('celebrateBtn');
const formArea     = document.getElementById('formArea');
const cakeArea     = document.getElementById('cakeArea');
const cake         = document.getElementById('cake');
const bgText       = document.getElementById('bgText');
const messageEl    = document.getElementById('message');
const blowHint     = document.getElementById('blowHint');
const warningEl    = document.getElementById('warning');

let blown = false;

function launchConfetti(colors) {
  confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 }, colors });
  setTimeout(() => {
    confetti({ particleCount: 90, angle: 60,  spread: 65, origin: { x: 0, y: 0.8 }, colors });
    confetti({ particleCount: 90, angle: 120, spread: 65, origin: { x: 1, y: 0.8 }, colors });
  }, 350);
  setTimeout(() => {
    confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 }, colors });
  }, 800);
}

function sendBalloons(colors) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const b = document.createElement('div');
      b.className = 'balloon';
      b.style.left = Math.random() * 94 + 'vw';
      b.style.setProperty('--dur', (Math.random() * 2 + 5) + 's');

      const body = document.createElement('div');
      body.className = 'balloon-body';
      body.style.background = color;

      const tip = document.createElement('div');
      tip.style.cssText = `position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:6px solid ${color};`;

      const str = document.createElement('div');
      str.className = 'balloon-string';

      body.appendChild(tip);
      b.appendChild(body);
      b.appendChild(str);
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 8000);
    }, i * 280);
  }
}

function getMessages(name, age) {
  const n = name || 'you';
  return [
    `Happy Birthday, ${n}.`,
    `${age} looks good on ${n}.`,
    `Make a wish, ${n}.`,
    `Cheers to ${age} years.`,
    `This one's for ${n}.`,
  ];
}

function showWarning(msg, inputEl) {
  warningEl.textContent = msg;
  if (inputEl) inputEl.classList.add('error');
  setTimeout(() => {
    warningEl.textContent = '';
    if (inputEl) inputEl.classList.remove('error');
  }, 2500);
}

function onBlowOut() {
  if (blown) return;
  blown = true;

  blowHint.classList.add('hidden');

  const theme = getTheme(parseInt(ageInput.value) || 25);
  const name  = nameInput.value.trim();
  const age   = ageInput.value;

  blowOutCandles(() => {
    launchConfetti(theme.balloons);
    sendBalloons(theme.balloons);
  });

  setTimeout(() => {
    const msgs = getMessages(name, age);
    messageEl.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    messageEl.classList.add('show');
  }, 700);
}

function celebrate() {
  const name = nameInput.value.trim();
  const age  = parseInt(ageInput.value);

  if (!name) {
    showWarning('Please enter your name first.', nameInput);
    nameInput.focus();
    return;
  }

  if (!age || age < 1 || age > 40) {
    showWarning('Please enter a valid age (1–40).', ageInput);
    ageInput.focus();
    return;
  }

  blown = false;
  warningEl.textContent = '';
  formArea.classList.add('hidden');

  const theme = getTheme(age);
  applyTheme(theme);

  setTimeout(() => {
    buildDrips();
    buildCandles(age);
    cakeArea.classList.add('show');
    bgText.classList.add('show');
    bgText.textContent = `Happy Birthday, ${name}`;

    launchConfetti(theme.balloons);
    sendBalloons(theme.balloons);

    setTimeout(() => blowHint.classList.add('show'), 1200);
  }, 300);
}

cake.addEventListener('click', onBlowOut);
celebrateBtn.addEventListener('click', celebrate);
ageInput.addEventListener('keydown',  e => { if (e.key === 'Enter') celebrate(); });
nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') ageInput.focus(); });
