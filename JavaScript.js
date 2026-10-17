let humanScore = 0;
let computerScore = 0;


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
        alert(`It's a tie! You both win!`);
        return [++humanScore, ++computerScore];
    } else if (humanChoice == `rock`) {
        if (computerChoice == `paper`) {
            alert(`You lose! Paper beats Rock.`);
            return ++computerScore;
        } else {
            alert(`You win! Rock beats Scissors.`);
            return ++humanScore;
        };
    } else if (humanChoice == `paper`) {
        if (computerChoice == `scissors`) {
            alert(`You lose! Scissors beats Paper.`);
            return ++computerScore;
        } else {
            alert(`You win! Paper beats Rock.`);
            return ++humanScore;
        };
    } else if (humanChoice == `rock`) {
        if (computerChoice == `paper`) {
            alert(`You lose! Paper beats Rock.`);
            return ++computerScore;
        } else {
            alert(`You win! Rock beats Scissors.`);
            return ++humanScore;
        }
    }
}

function playGame() {
    for (let index = 0; index <= 5 ; index++) {
        let humanAnswer = getHumanChoice();
        let computerAnswer = getComputerChoice();
        playRound(humanAnswer, computerAnswer);
        console.log(`The score is human: ${humanScore} computer: ${computerScore}.`)
    }
    humanScore = 0;
    computerScore = 0;
};

playGame();