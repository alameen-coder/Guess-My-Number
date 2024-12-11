let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  //  If no number is inputted
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number...';
  }

  // if the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 You Guessed Right...';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').classList.add('beat');
    document.querySelector('.number').style.bottom = '-30%';
    document.querySelector('.number').style.left = '40%';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //if the guess is greater than secretnumber
  else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess < secretNumber ? '📈 Too LOW...' : '📉 Too HIGH...';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You LOSE...';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').classList.remove('beat');
  document.querySelector('.number').style.bottom = '0%';
  document.querySelector('.number').style.left = '50%';
});
