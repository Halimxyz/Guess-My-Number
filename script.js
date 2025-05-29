'use strict';
// document.querySelector('.message').textContent += "test";
// console.log(document.querySelector('.message').textContent);

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let solved = false;
let score = 20;
// console.log(secretNum);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (score <= 1) {
        displayMessage('💥 You lost');
        document.querySelector('body').style.backgroundColor = '#ff0000';
        return
    }
    if (solved) {
        displayMessage('You already solved it!!');
        return
    }
    if (!guess && guess != 0) { displayMessage('⛔ No number'); return; }
    if (guess === secretNum) {
        displayMessage('Correct 🎉');
        solved = true;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNum;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        return;
    }
    displayMessage(guess > secretNum ? `📈 Too high` : `📉 Too low`);
    score--;
    document.querySelector('.score').textContent = score;

    // if (guess > secretNum) {
    //     document.querySelector('.message').textContent = 'Too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;

    //     return;
    // }
    // if (guess < secretNum) {
    //     document.querySelector('.message').textContent = 'Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }
});


document.querySelector('.again').addEventListener('click', function () {
    secretNum = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNum);
    solved = false;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';

    document.querySelector('.score').textContent = score;
})

const displayMessage = function (newMessage) {
    document.querySelector('.message').textContent = newMessage;
}
