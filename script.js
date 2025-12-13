        const ageInput = document.getElementById('age-input');
        const celebrateBtn = document.getElementById('celebrate-btn');
        const cakeContainer = document.getElementById('cake-container');
        const candlesContainer = document.getElementById('candles-container');
        const backgroundText = document.getElementById('background-text');
        const controls = document.getElementById('controls');

        function launchConfetti() {
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#ff6b6b', '#e0929f', '#ffffff', '#f9ca24', '#f0932b']
            });
            setTimeout(() => {
                confetti({
                    particleCount: 120,
                    angle: 60,
                    spread: 70,
                    origin: { x: 0, y: 0.8 }
                });
                confetti({
                    particleCount: 120,
                    angle: 120,
                    spread: 70,
                    origin: { x: 1, y: 0.8 }
                });
            }, 300);
            
            
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 110,
                    origin: { y: 0.5 }
                });
            }, 800);
        }

        function releaseBalloons() {
            const balloons = ['🎈', '🎈', '🎈','🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.classList.add('balloon');
                    balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
                    balloon.style.left = Math.random() * 100 + 'vw';
                    balloon.style.fontSize = (Math.random() * 2 + 2.5) + 'rem';
                    balloon.style.animationDuration = (Math.random() * 2 + 5) + 's';
                    document.body.appendChild(balloon);
                    setTimeout(() => balloon.remove(), 8000);
                }, i * 350);
            }
        }

        function celebrateBirthday() {
            const age = parseInt(ageInput.value);

            if (isNaN(age) || age < 1 || age > 80) {
                alert('Please enter a valid age between 1 and 80.');
                return;
            }

            controls.classList.add('hide');

            
            candlesContainer.innerHTML = '';
            cakeContainer.classList.remove('show');
            backgroundText.classList.remove('show');

            
            setTimeout(() => {
                cakeContainer.classList.add('show');
                backgroundText.classList.add('show');

                
                const fragment = document.createDocumentFragment();
                const maxCandles = Math.min(age, 50); 
                const spacing = Math.min(2, 300 / maxCandles); 
                
                for (let i = 0; i < maxCandles; i++) {
                    const candle = document.createElement('div');
                    candle.classList.add('candle');
                    candle.style.margin = `0 ${spacing}px`;
                    const flame = document.createElement('div');
                    flame.classList.add('flame');
                    candle.appendChild(flame);
                    fragment.appendChild(candle);
                }
                candlesContainer.appendChild(fragment);

                
                const candles = candlesContainer.querySelectorAll('.candle');
                candles.forEach((candle, i) => {
                    setTimeout(() => candle.classList.add('appear'), i * 20); 
                });

                
                launchConfetti();
                releaseBalloons();

                
                setTimeout(() => {
                    confetti({
                        particleCount: 250,
                        spread: 100,
                        origin: { y: 0.7 }
                    });
                }, 1000 + (maxCandles * 20));

            }, 300);
        }
        
        celebrateBtn.addEventListener('click', celebrateBirthday);
        ageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') celebrateBirthday();
        });