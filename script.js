function getComputerChoice(){
    let k = Math.floor((Math.random()*3));
    if(k == 0){
        return "Rock";
    }
    else if(k == 1){
        return "Paper";
    }
    else return "Scissor";
}

function getUserChoice(){
    let choice = prompt("Enter you choice: ");
    return choice;
}

function playRound(userChoice, computerChoice){
    if(userChoice === computerChoice){
        results.textContent = ` It is a tie`;
        choice.textContent = `Computer Chose- ${computerChoice}`;
        score.textContent = `user - ${userScore}, computer - ${computerScore}`;
    }
    else if((userChoice === "rock" && computerChoice === "scissor") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissor" && computerChoice === "paper")){
        userScore++;
        results.textContent = `User wins`;
        choice.textContent = `Computer Chose- ${computerChoice}`;
        score.textContent = `user - ${userScore}, computer - ${computerScore}`;
        
    }
    else{
        computerScore++;
        results.textContent = `computer wins`;
        choice.textContent = `Computer Chose- ${computerChoice}`;
        score.textContent = `user - ${userScore}, computer - ${computerScore}`;
        
    }
}

// declaring the score variables globally to retain the previous round's score while moving to the next round

let userScore = 0;
let computerScore = 0;


//creating a reference for the buttons

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const choice = document.querySelector("#choice");
const score = document.querySelector("#score");
const resultContainer = document.querySelector("#result");


buttons.forEach(button =>{
    button.addEventListener("click", e=>{
    let userChoice = e.target.id.toLowerCase();
    console.log(userChoice);
    let computerChoice = getComputerChoice().toLowerCase();
    resultContainer.classList.add("active");
    playRound(userChoice,computerChoice);
        if(userScore == 5){
            results.textContent =`You won the game`;
            score.textContent = `Human - ${userScore} Computer - ${computerScore}`;
            userScore = 0;
            computerScore = 0;
        }
        else if(computerScore == 5){
            results.textContent = `Computer won the game`;
            score.textContent = `Computer - ${computerScore} Human - ${userScore}`;
            userScore = 0;
            computerScore = 0;
        }
    });
});
