
const boxes       = document.querySelectorAll(".box");
const textResult  = document.querySelector("#textResult");
const resetButton = document.querySelector("#resetButton");

let currentPlayer = "X";
let gameIsLive    = true;

let options       = ["","","","","","","","",""];

const winningConditions= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];

// Add click event listener to each box
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
      if (gameIsLive && boxes[i].innerHTML === "") {
        // Set the box value to the current player
        boxes[i].innerHTML = currentPlayer;
  
        // Update the options array with the current move
        options[i] = currentPlayer;
  
        // Check if the current player has won the game
        if (checkWin(currentPlayer)) {
          textResult.innerHTML = `${currentPlayer} wins!`;
          gameIsLive = false;
        } else if (checkDraw()) {
          textResult.innerHTML = "It's a draw!";
          gameIsLive = false;
        } else {
          // Switch to the next player
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          textResult.innerHTML = `${currentPlayer}'s turn`;
        }
      }
    });
  }
  
  // Add click event listener to reset button
  resetButton.addEventListener("click", resetGame);
  
  // Function to check if the current player has won
  function checkWin(player) {
    for (let i = 0; i < winningConditions.length; i++) {
      if (
        options[winningConditions[i][0]] === player &&
        options[winningConditions[i][1]] === player &&
        options[winningConditions[i][2]] === player
      ) {
        return true;
      }
    }
    return false;
  }
  
  // Function to check if the game is a draw
  function checkDraw() {
    return !options.includes("");   //because there is no empty box right there, it'll give true (because '!')
  }
  
  // Function to reset the game
  function resetGame() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = "";
    }
    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameIsLive = true;
    textResult.innerHTML = `${currentPlayer}'s turn`;
  }
  