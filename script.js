'use strict';

let score = 20;
let highscore = 0;
let random = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').textContent = score;
//document.querySelector('.number').textContent = random;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === random) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    if(score > document.querySelector('.highscore').textContent){
        document.querySelector('.highscore').textContent = score;

    }
  } else if (guess > random) {
    document.querySelector('.message').textContent = '📈 Too high!';
    if(score>0){
        --score;
        }
    if(score == 0){
        document.querySelector('.message').textContent = '💀 You Lost!';
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < random) {
    document.querySelector('.message').textContent = '📉 Too low!';
    if(score>0){
    --score;
    }
    if(score == 0){
        document.querySelector('.message').textContent = '💀 You Lost!';
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.btn_again').addEventListener('click', function () {
    score = 20;
    random = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = random;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
