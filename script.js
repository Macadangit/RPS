// element.querySelector(selector) -- returns the FIRST match for selector
// element.querySelectorAll(selectors) -- returns nodelist containing ALL references to that selector

// How do I select a selector?? ^^^^


// How do I create an element from the DOM?
// document.createEleement(tagname, [options])
// ----- JUST CREATE ELEMENT IN MEMORY, NOT IN DOM  



// Why isn't it showing up on my screen? ^^^



// How do I make it show up on screen?

// APPEND ELEMENTS

// parentnode.appendChild(childNode) - appends childNode as the last child of parentNode
// 
// How do I make this element a child of this node? ^^^^^^


//parentNode.insertbefore(newNode, referencenode) - inserts newNode into parentNode before reference node

{/*
<body>
    <h1>
      THE TITLE OF YOUR WEBPAGE
    </h1>
    <div id="container"></div>
</body> 
*/}

// ^^^^^^^^^^^^^    
// parentNode.insertbefore('p', '#container')

/*
Expected output:

<body>
    <h1>
      THE TITLE OF YOUR WEBPAGE
    </h1>
    <p></p>
    <div id="container"></div>
</body> 

*/


// How do I remove stuff?

//parentNode.removeChild(child)


// I want to add an element below my first div selector:

// const container = document.querySelector('div'); // returns the first instance of arg

// const content  = document.createElement('div'); //creates element in memory
// content.classList.add('content'); // adding class content to div
// content.textContent = "this is the text content that I added";

// container.appendChild(content); // actually appending the content after the reference initiated in container


// const body = document.querySelector('body');  // select

// const p = document.createElement('p'); // create new element
// p.classList.add('p-tag'); // give element class
// p.textContent = "Hey I'm red!" // content
// p.style.color = 'red'; // style

// body.appendChild(p); // append it to the HTML using the selector you initialized


// const h3 = document.createElement('h3');
// h3.classList.add('subheader');
// h3.textContent = "I'm a blue h3";
// h3.style.color = 'blue';

// body.appendChild(h3);

// const div = document.createElement('div');
// div.classList.add('div');
// div.setAttribute('style', 'border: 1px solid black; padding: 100px;');

// body.appendChild(div);

// const h1 = document.createElement('h1');
// h1.classList.add('header');
// h1.textContent = "I'm in a div";

// div.appendChild(h1)

// const p2 = document.createElement('p');
// p2.textContent = "ME TOO!";

// div.appendChild(p2);

// const btn = document.querySelector("button"); // returning the first instance of "button"

// const button = document.getElementsByClassName("second-button")[0]; // requires index ref for which to affect

// button.style.backgroundColor = "red"; 


// getElementbyId ONLY WORKS FOR ID's DUMMY 



// RPS probably wasn't working because you used getElementbyId to try to point to class selectors 

// const temp = document.getElementsByClassName("box-header")[0];
// temp.style.color = "red"; // it did make the correct selection 

// temp.addEventListener("click", () => {
//     temp.style.display = "none";
// })


// ^^^^ THIS FREAKING WORKED!!!!!!!!!!! Can i make it work with element ID or queryselector?


// const clicker = document.getElementById("disappear-header");
// clicker.style.color = "red"; // it did make the correct selection // no 

// clicker.addEventListener("click", () => {
//     clicker.style.display = "none";
// })

// ^^^ this worked as well. 

// ================================================================================================================================


const subTitle = document.getElementById("disappear-p");
const gameBox = document.getElementById("game-window"); // why are these two good but the other two aren't quite working
const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");

gameBox.addEventListener("click", (event) => {
    event.stopPropagation();

    subTitle.textContent = "make your selection.";
    
});


rockBtn.addEventListener("click", (event) => {
    subTitle.textContent = "start countdown1"; // I can't manipulate any of the elements outside of this one wtf
    event.stopPropagation();

});


paperBtn.addEventListener("click", (event) => {
    subTitle.textContent = "start countdown2"; // I can't manipulate any of the elements outside of this one wtf
    event.stopPropagation();
});

scissorsBtn.addEventListener("click", () => {
    subTitle.textContent = "start countdown3"; // I can't manipulate any of the elements outside of this one wtf
    event.stopPropagation();
});







//

// the game title shoudl be where the information is displayed
// click continue should fully disappear and buttons should appear -- maybe the appearing buttons are ambitious?

// ================================================================================================================================

// GAME LOGIC
const prompt = require("prompt-sync")(); 

// getComputerChoice function
const getComputerChoice = () =>{
    const options = ['Rock',]; //'Paper','Scissors'
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
        console.log("Please enter valid input.");
    }
}

// Because singleRound() is initialized to undefined, the first round plays out and then doesn't return a value. 



// best of five rounds ---- single round is looping twice, but the commands after five rounds is only functioning every other loop.  ------ I WAS CALLING IT TWICE BECAUSE I DIDN'T REALIZE I WAS CALLING IT IN MY IF STATEMENT TOO!!!

const fiveRounds = () =>{
        const isReady = prompt('Welcome to "Rock, Paper, Scissors". Are you ready to play?(y/n): ');
        if (isReady.toLowerCase() == "y"){
            let rounds = 0;
            let userPoints = 0;
            let compPoints = 0;
            while(rounds < 5){
                let SR = singleRound();
                if(SR == "lost"){
                    compPoints +=1;
                    console.log("SCORE: you - " + userPoints + " || computer - " + compPoints);
                }else if(SR == "won"){
                    userPoints +=1; /// says woon for undefined as well 
                    console.log("SCORE: you - " + userPoints + " || computer - " + compPoints);
                }else{
                    rounds += 1;
                    console.log(rounds);
                    console.log("SCORE: you - " + userPoints + " || computer - " + compPoints);
                    continue;
                }
                rounds +=1;
                console.log(rounds);
                console.log(userPoints);
                console.log(compPoints);

            }
            if(userPoints > compPoints ){
                console.log("You Won! Well done.");
            }else{
                console.log("You Lost! Better luck next time.");
            }

    }
}





// run the five rounds of RPS.
// console.log(test())
// test()


fiveRounds()
