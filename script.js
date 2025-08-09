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
        alert(` It is a tie \nuser - ${userScore}, computer - ${computerScore}`);
    }
    else if((userChoice === "rock" && computerChoice === "scissor") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissor" && computerChoice === "paper")){
        userScore++;
        alert(`User wins \nuser  - ${userScore}, computer - ${computerScore}`);
        
    }
    else{
        computerScore++;
        alert(`computer wins \nuser - ${userScore}, computer - ${computerScore}`);
        
    }
}

function playGame(){
    let computer;
    let user;
    for(let i = 1;i<=5;i++){
        // to make the choices insensitive just make the returned values in to either lower or upper case
         computer = getComputerChoice().toLowerCase();// calling the choice functions before calling playground
         console.log(computer);
         user = getUserChoice().toLowerCase();// so that every time a fresh choices is generated and inputted
         if((user != "rock") && (user != "scissor") && (user != "paper") ){ 
            // use && function in the condition because think idiot
            alert("invalid choice");
            return;
         }
        playRound(user,computer);
    }
    if(userScore>computerScore){
        alert(`User Won! \nuser - ${userScore} Computer - ${computerScore}`);
    }
    else if(userScore === computerScore){ // to check whether if it is a tie
        alert(`It's a tie \nuser - ${userScore} Computer - ${computerScore}`)
    }
    else{
        alert(`Computer Won \nuser - ${userScore}, Computer - ${computerScore}`);
    }
}

// declaring the score variables globally to retain the previous round's score while moving to the next round

let userScore = 0;
let computerScore = 0;
playGame();