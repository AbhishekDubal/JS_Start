
let buttons=["rock","paper","scissors"];
let playerScore=0;
let computerScore=0;

function computerPlay()
{
    return buttons[Math.floor(Math.random()*buttons.length)];
}

function compareScores(playerChoice, computerChoice)
{
    if(playerChoice===computerChoice)
    {
        return "Tie!";
    }
    else if((playerChoice=== "rock" && computerChoice==="scissors") ||
            (playerChoice=== "scissors" && computerChoice==="paper") ||
            (playerChoice=== "paper" && computerChoice==="rock"))
            {
                playerScore+=1;
                return "You won this turn!";
            }
    else
    {
        computerScore+=1;
        return "You lose this turn!";
    }
}

function showTextResult(textResult)
{
    const text=document.getElementById("messageAfterGame");
    text.textContent=textResult;
}

function updateScoreBoard()
{
    const score=document.querySelector("#scoreBoard")
    score.textContent= `Score: ${playerScore} - ${computerScore}`;
}

function resetGame()
{
    playerScore=0;
    computerScore=0;
    showTextResult("");
    updateScoreBoard();
}

const chooseButton = document.querySelectorAll("button");

chooseButton.forEach((button) => {
    button.addEventListener("click", ()=>{
        const playerChoice = button.id;
        const computerChoice = computerPlay();
        const  textResult= compareScores(playerChoice, computerChoice);
        showTextResult(textResult);

        updateScoreBoard();

        if(playerScore===5 || computerScore===5)
        {
            const finalResult = playerScore > computerScore ? "Hurrey! you win this game." : "Sorry! you lose this game";

            alert(finalResult);

            resetGame();
        }
    })
});