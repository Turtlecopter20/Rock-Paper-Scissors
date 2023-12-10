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
const div = document.querySelector('#container');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector('#result');
const finalResult = document.querySelector('#finalresult');
const playerShowCounter = document.querySelector('#playerscore');
const computerShowCounter = document.querySelector('#computerscore');

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

div.addEventListener('click', (e) => {
    let target = e.target;
    switch (target.id) {
        case 'rock' :
            playerChoice = 'rock';
            break;
        case 'paper' :
            playerChoice = 'paper';
            break;
        case 'scissors' :
            playerChoice = 'scissors';
            break;
    }
    if (computerCounter == 0 && playerCounter == 0) finalResult.textContent = "";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
    console.log(message);
    result.textContent = `${message}`;
    playerShowCounter.textContent = `Player score : ${playerCounter}`;
    computerShowCounter.textContent = `Computer score : ${computerCounter}`;
    checkWinner(computerCounter, playerCounter);

   } )

function resetGame() {
    computerCounter = 0;
    playerCounter = 0;
    result.textContent = '';
}
function checkWinner (computerCounter, playerCounter){
if (computerCounter > playerCounter && computerCounter == 5) {
    finalResult.textContent = "You lost all your lives, I have won!";
    resetGame();
    }
else if(playerCounter > computerCounter && playerCounter == 5) {
    finalResult.textContent = "You've won it all, good job!";
    resetGame();
    }
}