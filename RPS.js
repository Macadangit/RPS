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



// Single round version (Game flow logic)---------------------------------------- This works

const singleRound = () =>{
    let PS = playerSelection();
    let GC = getComputerChoice();
    console.log(PS) //for debugging
    console.log(GC) //for debugging
    if(PS == GC){
        console.log("It was a tie!");
    }else if(GC == "rock" && PS == "paper"){ // I acknowledge theres certainly a better way to do this but I'm tired so I'm just gonna do it this way for now.
        console.log("You Won! Your opponent chose rock.");
        return ("won");
    }else if(GC == "paper" && PS == "scissors"){
        console.log("You Won! Your opponent chose paper.");
        return ("won");
    }else if(GC == "scissors" && PS == "rock"){
        console.log("You won! Your opponent chose scissors.");
        return ("won");
    }else if(GC == "paper" && PS == "rock"){
        console.log("You Lost! Your opponent chose paper.");
        return ("lost");
    }else if(GC == "scissors" && PS == "paper"){
        console.log("You Lost! Your opponent chose scissors.");
        return ("lost");
    }else if(GC == "rock" && PS == "scissors"){
        console.log("You Lost! Your opponent chose rock.");
        return ("lost");
    }else{
        console.log("Please enter valid input.")
    }
}

// Because singleRound() is initialized to undefined, the first round plays out and then doesn't return a value. 



// best of five rounds ---- single round is looping twice, but the commands after five rounds is only functioning every other loop. 

const fiveRounds = () =>{
        const isReady = prompt('Welcome to "Rock, Paper, Scissors". Are you ready to play?(y/n): ');
        if (isReady.toLowerCase() == "y"){
            rounds = 0
            while(rounds < 5){

            
                if(singleRound() == "lost"){
                    console.log('it returned lost');
                }else{
                    console.log('it returned won'); /// says woon for undefined as well 
                }
                rounds +=1;
                console.log(rounds);

                // if(singleRound() == "lost"){
                //     console.log('it returned lost');
                // }else{
                //     console.log('it returned won');
                // }
                // // rounds +=1;
                // // console.log(rounds);

                // if(singleRound() == "lost"){
                //     console.log('it returned lost');
                // }else{
                //     console.log('it returned won');
                // }
                // // rounds +=1;
                // // console.log(rounds);
            }
    }
}


const test = () => {
    console.log("this should return the value 5");
    return(5);
}


// run the five rounds of RPS.
// console.log(test())
// test()


fiveRounds()
