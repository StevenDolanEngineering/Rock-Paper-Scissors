function getHumanChoice() {
    let humanInput = prompt(`Please input either rock, paper, or scissors: `);
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
};

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    computerChoice = (computerChoice == 1) ? `rock` :
    (computerChoice == 2) ? `paper` : `scissors`;
    return computerChoice;
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both win!`);
        return [++humanScore, ++computerScore];
    } else if (humanChoice == `rock`) {
        if (computerChoice == `paper`) {
            console.log(`You lose! Paper beats Rock.`);
            return ++computerScore;
        } else {
            console.log(`You win! Rock beats Scissors.`);
            return ++humanScore;
        };
    } else if (humanChoice == `paper`) {
        if (computerChoice == `scissors`) {
            console.log(`You lose! Scissors beats Paper.`);
            return ++computerScore;
        } else {
            console.log(`You win! Paper beats Rock.`);
            return ++humanScore;
        };
    } else if (humanChoice == `rock`) {
        if (computerChoice == `paper`) {
            console.log(`You lose! Paper beats Rock.`);
            return ++computerScore;
        } else {
            console.log(`You win! Rock beats Scissors.`);
            return ++humanScore;
        }
    }
}