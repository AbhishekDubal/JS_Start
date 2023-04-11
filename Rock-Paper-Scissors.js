// Define variables for game options and score
let options = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === 'scissors' && computerSelection === 'paper')) {
    userScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'You lose!';
  }
}

// Function to update the score
function updateScore() {
  const score = document.getElementById('score');
  score.textContent = `Score: ${userScore} - ${computerScore}`;
}

// Function to display the round result
function displayRoundResult(result) {
  const roundResult = document.getElementById('roundResult');
  roundResult.textContent = result;
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScore();
  displayRoundResult('');
}

// Event listeners for the game options
const optionsButtons = document.querySelectorAll('.option');
optionsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    displayRoundResult(result);
    updateScore();
    if (userScore === 5 || computerScore === 5) {
      const finalResult = userScore > computerScore ? 'You won the game!' : 'You lost the game!';
      alert(finalResult);
      resetGame();
    }
  });
});
