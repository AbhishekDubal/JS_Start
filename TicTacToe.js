
const boxes      = document.querySelectorAll(".box");
const textResult = document.querySelector("#textResult");
const resetButton= document.querySelector("#resetButton");

let gameIsLive   = true;

let currentPlayer="X";
let options      =["","","","","","","","",""];

const winningRule=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,4,6],[1,4,7],[2,5,8],[0,4,8]];

//add click event listener to each boxes.
for(let i=0; i<boxes.length;i++){
    boxes[i].addEventListener("click", ()=>{
        if(gameIsLive && boxes[i].innerHTML ===""){
            //set the box value to current Player
            boxes[i].innerHTML =currentPlayer;

            //update the array of options with the recent clicked player
            options[i]=currentPlayer;

            //now check if anybody win it or it's a draw. and if not then change the turn to nextPlayer
            if(checkWin(currentPlayer)){
                textResult.innerHTML=`${currentPlayer} wins this game.`;
                gameIsLive=false;

            }else if(checkDraw()){
                textResult.innerHTML=`It's a draw!. Please press "Reset" button to play again`;
                gameIsLive=false;
            }else{
                currentPlayer= currentPlayer==="X" ? "O" : "X";
                textResult.innerHTML =`${currentPlayer}'s turn now!`;
            }
        }
    })
}

//functions for checking current player's status:-
function checkWin(player){
    for(let i=0; i<winningRule.length;i++){
        if( options[winningRule[i][0]]===player
            && options[winningRule[i][1]]===player
            && options[winningRule[i][2]]===player){
                return true;
        }
    }
    return false;
}

//function for checking what if the match has draw!
function checkDraw(){
    return !options.includes("");
}

//function for Reset the game:-
resetButton.addEventListener("click", () =>{
    gameIsLive =true;

    for(let i=0; i<boxes.length; i++){
        boxes[i].innerHTML="";
    }

    options=["","","","","","","","",""];
    currentPlayer ="X";
    textResult.innerHTML=`${currentPlayer}' turn Now!`;
})