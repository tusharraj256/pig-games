'use strict '

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;


const init = function () {
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0
     playing = true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    
    diceE1.classList.add('hidden')

    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
}
init();

const switchplayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

btnroll.addEventListener('click', function () {

    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceE1.classList.remove('hidden');
        diceE1.src = `dice-${dice}.png`;


        if (dice !== 1) {

            currentScore += dice;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore
        } else {
            switchplayer();
        }
    }
})
btnhold.addEventListener('click', function () {

    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 50) {

            playing = false;
            diceE1.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner')
            document.querySelector(`player--${activePlayer}`)
                .classList.remove('player--active')
        } else {
            switchplayer();
        }
    }
})
btnNew.addEventListener('click', init )
