function getHumanChoice() {
    let humanInput = prompt("Please input either rock, paper, or scissors: ");
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
};

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    computerChoice = (computerChoice == 1) ? `rock` :
    (computerChoice == 2) ? `paper` : `scissors`;
    return computerChoice;
};

