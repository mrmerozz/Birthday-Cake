function buildCandles(age) {
  const wrap = document.getElementById('candles');
  wrap.innerHTML = '';

  const count = Math.min(age, 40);

  // distribute candles evenly inside 280px container
  // each candle is 5px wide
  let gap = 0;
  if (count > 1) {
    gap = Math.floor((280 - count * 5) / (count - 1));
    gap = Math.max(1, Math.min(gap, 18));
  }
  wrap.style.gap = gap + 'px';

  for (let i = 0; i < count; i++) {
    const candle = document.createElement('div');
    candle.className = 'candle';
    candle.innerHTML = `<div class="flame"></div><div class="candle-body"></div>`;
    wrap.appendChild(candle);
  }

  document.querySelectorAll('.candle').forEach((c, i) => {
    setTimeout(() => c.classList.add('on'), i * 25);
  });
}

function buildDrips() {
  const wrap = document.getElementById('cakeDrips');
  wrap.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const d = document.createElement('div');
    d.className = 'drip';
    wrap.appendChild(d);
  }
}

function blowOutCandles(onDone) {
  document.querySelectorAll('.flame').forEach((f, i) => {
    setTimeout(() => {
      f.classList.add('out');
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      f.parentElement.querySelector('.candle-body').appendChild(smoke);
      setTimeout(() => smoke.remove(), 750);
    }, i * 30);
  });

  const total = document.querySelectorAll('.flame').length;
  setTimeout(onDone, total * 30 + 200);
}
