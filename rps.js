//Make a function that gets the computer one of three values: Rock, Paper or Scissors.
let getWeapon = ["Rock" , "Paper" , "Scissors"];
let computerChoice;
function getComputerChoice () {
computerChoice = getWeapon[Math.floor(Math.random()*getWeapon.length)]
return computerChoice;
}
console.log(getComputerChoice());

