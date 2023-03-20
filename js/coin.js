import $ from "../js/custom.js";
const coins = $('.coin'), headsSpan = $('.heads-span'), tailsSpan = $('.tails-span');
let headScore = 0, tailScore = 0;

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('coin')) {
        target.style.animation = 'flip 1s';
        new Audio('../audio/flip.wav').play();
        setTimeout(() => {
            target.style.animation = '';
            if (Math.floor(Math.random() * 2)) {
                ++tailScore;
                tailsSpan.innerText = `${tailScore}`
                coins[0].style.display = 'none';
                coins[1].style.display = 'flex';
            } else {
                ++headScore;
                headsSpan.innerText = `${headScore}`
                coins[0].style.display = 'flex';
                coins[1].style.display = 'none';
            }
        }, 800);
    }
})
