function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "None";
    } else if (computerSelection === "papper") {
      return "Lose";
    } else {
      return "Win";
    }
  } else if (playerSelection === "papper") {
    if (computerSelection === "papper") {
      return "None";
    } else if (computerSelection === "rock") {
      return "Win";
    } else {
      return "Lose";
    }
  } else {
    if (computerSelection === "papper") {
      return "Win";
    } else if (computerSelection === "rock") {
      return "Lose";
    } else {
      return "None";
    }
  }
}
const choices = ["Rock", "Papper", "Scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
  let computerCount = 0;
  let playerCount = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      "Choose any of them:- Rock/Paper/Scissors",
      ""
    );
    const res = playRound(playerSelection, computerSelection);
    switch (res) {
      case "Lose":
        computerCount++;
        break;
      case "Win":
        playerCount++;
        break;
      default:
    }
  }
  const player = document.getElementById("player");
  player.innerHTML = "";
  player.innerHTML = `Player Score is ${playerCount}`;

  const computer = document.getElementById("computer");
  computer.textContent = `Computer Score is ${computerCount}`;
  let score = document.getElementById("player-score");

  if (computerCount == playerCount) {
    score.textContent = "Game is Draw!";
  } else if (computerCount > playerCount) {
    score.textContent = `You lose the game against computer by ${
      computerCount - playerCount
    }`;
  } else {
    score.textContent = `You won the game against computer by ${
      playerCount - computerCount
    }`;
  }
}
game();
