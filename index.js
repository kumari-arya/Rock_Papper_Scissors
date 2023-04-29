
console.log("Hello");
function playRound(playerSelection_, computerSelection_) {
  // your code here!
  playerSelection = playerSelection_.toLowerCase();
  computerSelection = computerSelection_.toLowerCase();
  if(playerSelection == "rock"){
    if(computerSelection == "rock"){
        console.log("tie");
        return "None";
    }
    else if(computerSelection == "papper"){
        console.log("Lose");
        return "Lose";
        //computer_count++;
    }
    else{
        console.log("Win");
        return "Win";
        //player_count++;
    }

  }
  else if(playerSelection == "papper"){
   if(computerSelection == "papper"){
    console.log("tie");
    return "None";
   }
   else if(computerSelection == "rock"){
    console.log("Win");
    return "Win";
    //player_count++;
   }
   else{
    console.log("Lose");
    return "Lose";
    //computer_count++;
   }
  }
  else{
   if(computerSelection == "papper"){
    console.log("Win");
    return "Win";
    //player_count++;
   }
   else if(computerSelection == "rock"){
    console.log("Lose");
    return "Lose";
    //computer_count++;
   }
   else{
    console.log("tie");
    return "None";
   }
  }

}
let choices = ['Rock', 'Papper', 'Scissors'];
function getComputerChoice(){
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}
let computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

function game() {
  let computer_count = 0;
let player_count = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose any of them:- Rock/Paper/Scissors",'');
    let res = playRound(playerSelection, computerSelection);
    if(res == "Lose")computer_count++;
    if(res == "Win")player_count++;
  }
  let player = document.getElementById("player");
  player.innerHTML = "";
  player.innerHTML = `Player Score is ${player_count}`;

  let computer = document.getElementById("computer");
  computer.textContent = `Computer Score is ${computer_count}`;
  let Score = document.getElementById("player-score");

  if(computer_count == player_count){
      Score.textContent = `Game is Draw!`
  }
  else if(computer_count > player_count){
    Score.textContent = `You lose the game against computer by ${computer_count-player_count}`;
}
else{
  Score.textContent = `You won the game against computer by ${player_count-computer_count}`;
}
}
game();
