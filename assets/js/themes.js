const themes = [
  { min:  1, max: 10, cakeMain:'#f4a7b9', cakeLight:'#fad4de', bg1:'#fff0f4', bg2:'#fad4de', candle:'#a8d8ea', drip:'#f9c8d4', balloons:['#f4a7b9','#a8d8ea','#ffd6e0','#b5ead7'] },
  { min: 11, max: 20, cakeMain:'#b39ddb', cakeLight:'#d1c4e9', bg1:'#f5f0ff', bg2:'#ede7f6', candle:'#f9e04b', drip:'#d7c8f0', balloons:['#b39ddb','#f48fb1','#fff176','#80cbc4'] },
  { min: 21, max: 30, cakeMain:'#c9a84c', cakeLight:'#e8d09a', bg1:'#fdf8ef', bg2:'#f5eac8', candle:'#fff9c4', drip:'#e8c97a', balloons:['#c9a84c','#e8d09a','#f48fb1','#fff9c4'] },
  { min: 31, max: 40, cakeMain:'#e8a598', cakeLight:'#f2c4bb', bg1:'#fdf6f0', bg2:'#fce8e2', candle:'#f9e04b', drip:'#f9d0c8', balloons:['#e8a598','#f2c4bb','#f9d06a','#a8d8ea'] },
  { min: 41, max: 50, cakeMain:'#c2677a', cakeLight:'#e09baa', bg1:'#fdf0f3', bg2:'#f7d6dc', candle:'#ffd54f', drip:'#e8aab6', balloons:['#c2677a','#e09baa','#ffd54f','#81d4fa'] },
  { min: 51, max: 60, cakeMain:'#6aa6a0', cakeLight:'#a4cec9', bg1:'#f0faf9', bg2:'#daf0ed', candle:'#fff176', drip:'#b8dbd8', balloons:['#6aa6a0','#a4cec9','#f48fb1','#fff176'] },
  { min: 61, max: 70, cakeMain:'#7986cb', cakeLight:'#aab6fb', bg1:'#f3f4ff', bg2:'#e8eaf6', candle:'#ffd54f', drip:'#c5cae9', balloons:['#7986cb','#aab6fb','#f48fb1','#ffd54f'] },
  { min: 71, max: 99, cakeMain:'#8d4a5a', cakeLight:'#c47d8e', bg1:'#fdf5f7', bg2:'#f5dde2', candle:'#ffd700', drip:'#d4939e', balloons:['#8d4a5a','#c47d8e','#ffd700','#80cbc4'] },
];

function getTheme(age) {
  return themes.find(t => age >= t.min && age <= t.max) || themes[3];
}

function applyTheme(t) {
  const r = document.documentElement.style;
  r.setProperty('--cake-main',  t.cakeMain);
  r.setProperty('--cake-light', t.cakeLight);
  r.setProperty('--candle-col', t.candle);
  r.setProperty('--bg-start',   t.bg1);
  r.setProperty('--bg-end',     t.bg2);
  document.body.style.background = `linear-gradient(160deg, ${t.bg1}, ${t.bg2})`;
  document.querySelectorAll('.drip').forEach(d => d.style.background = t.drip);
}
