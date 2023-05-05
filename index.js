function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock": {
          return "None";
        }
        case "papper": {
          return "Lose";
        }
        default: {
          return "Win";
        }
      }

    case "papper":
      switch (computerSelection) {
        case "rock": {
          return "Win";
        }
        case "papper": {
          return "None";
        }
        default: {
          return "Lose";
        }
      }

    case "scissors":
      switch (computerSelection) {
        case "rock": {
          return "Lose";
        }
        case "papper": {
          return "Win";
        }
        default: {
          return "None";
        }
      }

    default:
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
  const score = document.getElementById("player-score");

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
