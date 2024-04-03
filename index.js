//List to hold all available game weapons.
let options = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');




let userScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;
let computerChoice = "";
let userChoice = "";
let outcome = "";

let compRock = 0;
let cpuRcokPercent = 0;
let compPaper = 0;
let cpuPaperPercent = 0;
let compScissors = 0;
let cpuScissorPercent = 0;

let rockPerc = document.getElementById("rockPerc");
let paperPerc = document.getElementById("paperPerc");
let scissorsPerc = document.getElementById("scissorsPerc");


// Add click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id);
    });
});

//Plays single round of game
function playRound(userChoice){
    let computerChoice = getComputerChoice();
    outcome = winner(userChoice, computerChoice);
    updateScore(outcome);
    computerPercentage(computerChoice);
    round++;
    //document.getElementById("result").textContent = `You ${outcome} against the computer.`;
    document.getElementById("scoreBoard").textContent = `Wins: ${userScore}, Losses: ${computerScore}, Draws: ${draw}`;
    rockPerc.textContent = `Rock: ${cpuRcokPercent}%`;
    paperPerc.textContent = `Paper: ${cpuPaperPercent}%`;
    scissorsPerc.textContent = `Scissors: ${cpuScissorPercent}%`;
    
    let pastResult = document.getElementById("pastResult");
    let result = document.createElement("div");
    result.setAttribute("id", `round${round}`);
    result.textContent = `Round ${round}: User chose ${userChoice}, Computer chose ${computerChoice}. You ${outcome}! \n`;
    pastResult.appendChild(result);
}

//Returns randomly generated choice for computer
function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function getUserChoice(){
    let userChoice;

    //Keep running till input is valid
    while(!options.includes(userChoice)){
        userChoice = prompt('Choose rock, paper, or scissors.').toLocaleLowerCase();
    }

    return userChoice;
}

//Function to determine winner
function winner(userChoice, computerChoice){
    //Check for Tie
    if(userChoice == computerChoice)
    {
        return 'tied';
    }
    //Check for user win
    else if (
        (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'paper' && computerChoice == 'rock') ||
        (userChoice == 'scissors' && computerChoice == 'paper')
    )
    {
        return 'won';
    }
    //Return loss
    else
    {
        return 'lost';
    }
}

//Updates score of user and computer after single round
function updateScore(outcome){
    if(outcome == 'tied'){
        draw++;
    }
    else if(outcome == 'won'){
        userScore++;
    }
    else{
        computerScore++;
    }
}

function computerPercentage(computerChoice){
    if(computerChoice == 'rock'){
        compRock++;
    }
    else if(computerChoice == 'paper'){
        compPaper++;
    }
    else{
        compScissors++;
    }

    total = compRock + compPaper + compScissors;
    cpuRcokPercent = ((compRock/total) * 100).toFixed(2);
    cpuPaperPercent = ((compPaper/total) * 100).toFixed(2);
    cpuScissorPercent = ((compScissors/total) * 100).toFixed(2);
}
