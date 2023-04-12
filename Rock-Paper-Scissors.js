
const buttons=["rock", "paper", "scissors"];
let playerScore =0;
let computerScore=0;

function playComputer()
{
    return buttons[Math.floor(Math.random() * buttons.length)];
}

function compareBoth(playerChoice, computerChoice)
{
    if(playerChoice===computerChoice)
    {
        return "Tie!";
    }
    else if((playerChoice==="rock" && computerChoice==="scissors") ||
            (playerChoice==="scissors" && computerChoice==="paper")||
            (playerChoice==="paper" && computerChoice==="rock"))
            {
                playerScore+=1;
                return "You win this turn!";
            }
    else
    {
        computerScore+=1;
        return "You lose this turn!";
    }
}

function displayTextResult(textResult)
{
    const result=document.getElementById("messageAfterGame");
    result.textContent=textResult;
}

function updateScoreBoard()
{
    const score=document.getElementById("scoreBoard");
    score.textContent= `Score: ${playerScore} - ${computerScore}`;
}

function resetGame()
{
    playerScore=0;
    computerScore=0;
    updateScoreBoard();
    displayTextResult("");
}

const allButtuns=document.querySelectorAll("button");

allButtuns.forEach((button) =>{
    button.addEventListener("click", () =>{
        const playerChoice=button.id;
        const computerChoice=playComputer();

        const text=compareBoth(playerChoice, computerChoice);
        displayTextResult(text);
        updateScoreBoard();

        if(playerScore===5 || computerScore===5)
        {
            const finalResult=playerScore > computerScore ? "Hurrey! You win this game." : "Sorry! You lose this game.";

            alert(finalResult);

            resetGame();
        }
    })
})