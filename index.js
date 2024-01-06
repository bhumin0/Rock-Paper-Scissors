//List to hold all available game weapons.
const options = ['rock', 'paper', 'scissors'];

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

//Actual game (driver code)
function game(){
    let userScore = 0;
    let computerScore = 0;

    //Game will run for 5 rounds
    for(let round = 1; round <= 5; round++){
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        let outcome = winner(userChoice, computerChoice);

        //Update score total.
        if(outcome == 'tied'){
            continue;
        }
        else if(outcome == 'won'){
            userScore++;
        }
        else{
            computerScore++;
        }
        //Display the outcome of the round.
        console.log(`You ${outcome} against the computer.`);
    }

    console.log(`Total user wins: ${userScore}`);
    console.log(`Total computer wins: ${computerScore}`);
    console.log(`Total ties : ${5 - (computerScore + userScore)}`);
}

game();