'use strict';

// const displayRock = document.getElementById('#rock');
// const displayPaper = document.getElementById('#paper');
// const displayScissors = document.getElementById('#scissors');
// const resetGame = document.querySelector('.button-29');
// const winner = document.querySelector('.round-count');
// const playerChoice = document.querySelector('.player-choice');
// const computerChoice = document.querySelector('.computer-choice');
// const playerScore = document.querySelector('.player-scoring');
// const computerScore = document.querySelector('.computer-scoring');

const rock = 'assets/images/rock.png';
const paper = 'assets/images/paper.png';
const scissors = 'assets/images/scissors.png';
const robot = 'assets/images/robot.png';

const choices = [rock, paper, scissors];

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const _playerScore = document.getElementById('player-score');
const _computerScore = document.getElementById('computer-score');
const roundCount = document.getElementsByClassName('round-count')[0];
const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');
const computerImage = document.getElementById('computer-img');
const messageWrapper = document.getElementsByClassName('message')[0];
const _playerChoice = document.getElementById('player-choice');
const _computerChoice = document.getElementById('computer-choice');
const resetButton = document.getElementById('reset');
const choice = document.getElementsByClassName('choice');
const _tieScore = document.getElementById('tieScore');
reset();

playerRock.addEventListener('click', function () {
  getComputerChoice();
  playGame('rock');
});

playerPaper.addEventListener('click', function () {
  getComputerChoice();
  playGame('paper');
});

playerScissors.addEventListener('click', function () {
  getComputerChoice();
  playGame('scissors');
});

resetButton.addEventListener('click', function () {
  reset();
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoices = ['rock', 'paper', 'scissors'];

  computerImage.src = choices[randomNumber];

  return computerChoices[randomNumber];
}

function playGame(choice) {
  const computerChoice = getComputerChoice();

  console.log('cChoice', computerChoice);
  console.log('pChoice', choice);

  switch (choice + ' - ' + computerChoice) {
    case 'rock - paper':
    case 'paper - scissors':
    case 'scissors - rock':
      roundMessage('lose', choice, computerChoice);
      break;

    case 'paper - rock':
    case 'scissors - paper':
    case 'rock - scissors':
      roundMessage('win', choice, computerChoice);
      break;

    default:
      roundMessage('tie', choice, computerChoice);
      break;
  }
}

function roundMessage(message, playerChoice, computerChoice) {
  console.log('message', messageWrapper);
  switch (message) {
    case 'win':
      playerScore++;
      _playerScore.textContent = playerScore;
      messageWrapper.innerHTML = 'You won!';
      break;

    case 'lose':
      computerScore++;
      _computerScore.textContent = computerScore;
      messageWrapper.innerHTML = 'You lose!';
      break;

    default:
      tieScore++;
      _tieScore.textContent = tieScore;
      messageWrapper.innerHTML = 'TIE!';
      break;
  }

  _playerChoice.textContent = playerChoice;
  _computerChoice.textContent = computerChoice;

  rounds++;
  roundCount.textContent = rounds;

  if (rounds >= 6) {
    reset();
  }
}

function reset() {
  rounds = 0;
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  _playerScore.textContent = 0;
  _computerScore.textContent = 0;
  _tieScore.textContent = 0;
  messageWrapper.innerHTML = 'Press button';
  roundCount.textContent = 1;
  computerImage.src = robot;

  if (rounds === 1) {
    for (let i = 0; i < choice.length; i++) {
      choice[i].style.visibility = 'initial';
    }
  }
}
