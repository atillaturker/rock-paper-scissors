const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper' : 'scissors';
}

const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
        return "tie";
    }
    if (userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper"
    ){
        return "win";
    }
    else{
        return "lose";
    }

}

const updateResult = (result,userChoice,computerChoice) =>{
    const playerPara = document.querySelector(".player");
    const computerPara = document.querySelector(".computer");
    const resultPara = document.querySelector(".winner");

    playerPara.textContent = userChoice;
    computerPara.textContent = computerChoice;
    resultPara.textContent = result === "tie" ? "Tie" : "You " + result;

}

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice,computerChoice);
    updateResult(result,userChoice,computerChoice);
}

const startGame = () =>{
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            const userChoice = button.getAttribute("class");
            playGame(userChoice)
        })
    })
}

startGame();


