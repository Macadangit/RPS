// STEPS:
// 1. Main Game logic
// 2. getComputerChoice
// 3. playerSelection
// 4. Single round of plau 
// 5. string that says "You Lose! Paper beats Rock"
// 6. use input case sensitive
// 6. playGame() -- five rounds. Keep score. Report a winner and loser.

const prompt = require("prompt-sync")(); 

// getComputerChoice function
const getComputerChoice = () =>{
    const options = ['Rock','Paper','Scissors'];
    var rand = options[Math.random() * options.length>>0];
    return(rand.toLowerCase());
}

// playerSelection function

const playerSelection = () =>{
    var userSelect = prompt("Choose rock, paper, or scissors: ");
    return(userSelect.toLowerCase());
}

// Single round version (Game flow logic)

const singleRound = () =>{
    let PS = playerSelection();
    let GC = getComputerChoice();
    if(PS == GC){
        console.log("It was a tie!");
  
  //win conditions first
    }else if(GC == "rock" && PS == "paper"){ // I acknowledge theres certainly a better way to do this but I'm tired so I'm just gonna do it this way for now.
        console.log("You Won! Your opponent chose rock.");
    }else if(GC == "paper" && PS == "scissors"){
        console.log("You Won! Your opponent chose paper.");
    }else if(GC == "scissors" && PS == "rock"){
        console.log("You won! Your opponent chose scissors.");
    }else if(GC == "paper" && PS == "rock"){
        console.log("You Lost! Your opponent chose paper.");
    }else if(GC == "scissors" && PS == "paper"){
        console.log("You Lost! Your opponent chose scissors.");
    }else{
        console.log("You Lost! Your opponent chose rock.");
    }
    
}



// best of five rounds

const fiveRounds = () =>{
        const isReady = prompt('Welcome to "Rock, Paper, Scissors". Are you ready to play?(y/n): ');
        if (isReady.toLowerCase() == "y"){
            for (let i = 0; i < 5; i++){
                singleRound();
            }
    }
}



// run the five rounds of RPS.
fiveRounds()