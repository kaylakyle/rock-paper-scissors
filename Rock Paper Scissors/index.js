// Scores
let humanScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) return "rock";
  else if (randomNumber <= 0.67) return "paper";
  else return "scissors";
}

// Play a single round
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let roundMessage = "";

  if (playerSelection === computerSelection) {
    roundMessage = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    roundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    roundMessage = `Computer wins! ${computerSelection} beats ${playerSelection}`;
  }

  updateResults(roundMessage);
  checkGameWinner();
}

// Update the results in the DOM
function updateResults(message) {
  document.getElementById("round-result").textContent = message;
  document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// Check if someone reached 5 points
function checkGameWinner() {
  if (humanScore >= 5) {
    document.getElementById("game-winner").textContent = " You won the game!";
    disableButtons();
  } else if (computerScore >= 5) {
    document.getElementById("game-winner").textContent = " Computer won the game!";
    disableButtons();
  }
}

// Disable buttons after game over
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Add event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
