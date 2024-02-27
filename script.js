const getComputerChoice = () =>{
    const options = ['Rock', 'Paper','Scissors'];
    var rand = options[Math.random() * options.length>>0];
    return(rand.toLowerCase());
}

const singleRound = () =>{
    let PS = playerSelection;
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
        console.log("Please enter valid input.");
    }
}

const subTitle = document.getElementById("disappear-p");
const gameBox = document.getElementById("game-window"); 
const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");



function gameBoxBlinker(event) {
    event.stopPropagation();
    subTitle.textContent = "make your selection.";
    gameBox.removeEventListener("click", gameBoxBlinker); 
}

gameBox.addEventListener("click", gameBoxBlinker);



let playerScore = 0
let compScore = 0



rockBtn.addEventListener("click", (event) => {
    playerSelection = 'rock';
    SR = singleRound();    
    if(SR == "won"){
        playerScore += 1
        subTitle.textContent = "Wins: " + playerScore + "   Losses: " + compScore;
    } else{
        compScore += 1
        subTitle.textContent = "Wins: " + playerScore + "   Losses: " + compScore;
    }
    event.stopPropagation();

});


paperBtn.addEventListener("click", (event) => {
    playerSelection = 'paper';
    SR = singleRound();    
    if(SR == "won"){
        playerScore += 1
        subTitle.textContent = "Wins: " + playerScore + "   Losses: " + compScore;
    } else{
        compScore += 1
        subTitle.textContent = "Wins: " + playerScore + "   Losses: " + compScore;
    }
    event.stopPropagation();
});

scissorsBtn.addEventListener("click", (event) => {
    playerSelection = "scissors";
    SR = singleRound();    
    if(SR == "won"){
        playerScore += 1
        subTitle.textContent = "Wins: " + playerScore + "   Losses: " + compScore;
    } else{
        compScore += 1
        subTitle.textContent = "Wins: " + playerScore + "   Losses: " + compScore;
    }
    event.stopPropagation();
});



















































// const prompt = require("prompt-sync")();  // this breaks the whole event listener thing for some reason


// from the Console version. Function setsup game and runs it five times. 

// const fiveRounds = () =>{
//         const isReady = prompt('Welcome to "Rock, Paper, Scissors". Are you ready to play?(y/n): ');
//         if (isReady.toLowerCase() == "y"){
//             let rounds = 0;
//             let userPoints = 0;
//             let compPoints = 0;
//             while(rounds < 5){
//                 let SR = singleRound();
//                 if(SR == "lost"){
//                     compPoints +=1;
//                     console.log("SCORE: you - " + userPoints + " || computer - " + compPoints);
//                 }else if(SR == "won"){
//                     userPoints +=1; /// says woon for undefined as well 
//                     console.log("SCORE: you - " + userPoints + " || computer - " + compPoints);
//                 }else{
//                     rounds += 1;
//                     console.log(rounds);
//                     console.log("SCORE: you - " + userPoints + " || computer - " + compPoints);
//                     continue;
//                 }
//                 rounds +=1;
//                 console.log(rounds);
//                 console.log(userPoints);
//                 console.log(compPoints);

//             }
//             if(userPoints > compPoints ){
//                 console.log("You Won! Well done.");
//             }else{
//                 console.log("You Lost! Better luck next time.");
//             }

//     }
// }
