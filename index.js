function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Computer choice
  function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) return "rock";
    else if (randomNumber <= 0.67) return "paper";
    else return "scissors";
  }

  // Human choice
  function getHumanChoice() {
    return prompt("Do you choose rock, paper or scissors?").toLowerCase();
  }

  // One round logic
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Final results
  console.log("Final Score:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log(" You won the game!");
  } else if (computerScore > humanScore) {
    console.log(" Computer won the game!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();
