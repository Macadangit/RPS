// STEPS:
// 1. Main Game logic
// 2. getComputerChoice
// 3. playerSelection
// 4. Single round of plau 
// 5. string that says "You Lose! Paper beats Rock"
// 6. use input case sensitive
// 6. playGame() -- five rounds. Keep score. Report a winner and loser.

const propmt = require("prompt-sync")();

// getComputerChoice function
const getComputerChoice = () =>{
    const options = ['Rock','Paper','Scissors'];
    var rand = options[Math.random() * options.length>>0];
    console.log(rand);
    return(rand);
}














