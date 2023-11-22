//Make a function that gets the computer one of three values: Rock, Paper or Scissors.
//Create a variable that stores that answer.
let getWeapon = ["rock" , "paper" , "scissors"];
let computerChoice;
function getComputerChoice () {
computerChoice = getWeapon[Math.floor(Math.random()*getWeapon.length)];
return computerChoice;
}
console.log(getComputerChoice());
//Create a variable that stores a user answer.
//Tell user to choose between rock, paper and scissors, make the answer case sensitive.
let playerChoice;
//Create a function that plays a round of the game and create a variable that stores the messages and lives left;
let message;
let playerCounter = 0;
let computerCounter = 0;
function getBothchoices(){
    getComputerChoice();
    playerChoice =  prompt("Choose your weapon between rock , paper or scissors!", "").toLowerCase();
}
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) message = "It's a draw pick again!";
    else if (computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "rock") {
     message = `You lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}.`;
     computerCounter++;
    }
    else {message = `You win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
        playerCounter++;
        }
    
}
for (let i = 1; i<=5; i++){
    getBothchoices();
    playRound(computerChoice, playerChoice);
    console.log(message);
}
if (playerCounter < computerCounter) console.log("You lost all your lives, the computer has won!")
else if (playerCounter > computerCounter) console.log("You've won it all, good job!");
else console.log("Ahhh, it's a draw! Maybe next time lad!");
