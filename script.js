const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let userChoice;
let computerChoice;
let result;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    userChoice = choice.dataset.choice;
    userChoiceDisplay.textContent = userChoice;

    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    computerChoice = 'rock';
  } else if (randomNum === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  resultDisplay.textContent = result;
}
