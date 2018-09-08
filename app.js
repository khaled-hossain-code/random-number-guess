let min = 1,
  max = 10,
  winningNumber = getRandomNumber(max, min);
  guessed = 0,
  numberOfGuess = 3;

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessInput = document.querySelector('#guess-num'),
  guessBtn = document.querySelector('#guess-btn'),
  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

function resetThegame() {
  guessInput.value = '';
  guessInput.style.borderColor = '#D1D1D1';
  guessBtn.value = 'submit';
  guessInput.disabled = false;
  numberOfGuess = 3;
  setMessage(`You have ${numberOfGuess} chances to win!`);
}

game.addEventListener('mousedown', (e) => {
  console.log(
    winningNumber
  ); 
    
  if (e.target.className.includes('play-again')) {
    resetThegame();
  }
})

guessBtn.addEventListener('click', (e) => {
  let guess = parseInt(guessInput.value);

  if (e.target.className.includes('play-again')) {
    e.target.className = e.target.className.replace('play-again', '');
    return;
  }

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage('Please enter a valid number', 'red');
    guessInput.style.borderColor = 'red';
  } else if (guess === winningNumber) {
    gameOVer('Congrats!! You won!!!', 'green');
    guessInput.style.borderColor = 'green';
  } else if (guess < winningNumber) {
    numberOfGuess--;
    setMessage(`Your guess is too Low! Guesses left ${numberOfGuess}`);
    resetInput();
  } else if (guess > winningNumber) {
    numberOfGuess--;
    setMessage(`Your guess is too High! Guesses left ${numberOfGuess}`);
    resetInput();
  }

  if (numberOfGuess === 0) {
    gameOVer(`Game Over. You Lost!! The correct answer was ${winningNumber}`, 'red');
  }
})

function setMessage(msg, color = 'black') {
  message.textContent = msg;
  message.style.color = color;
}

function gameOVer(msg, color) {
  guessInput.disabled = true;
  guessInput.style.borderColor2 = color;
  setMessage(msg, color);
  guessBtn.value = 'play again';
  guessBtn.className += 'play-again';
}

function resetInput() {
  guessInput.style.borderColor = 'red';
  guessInput.value = '';
}

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}