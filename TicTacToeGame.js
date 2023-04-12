const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const restartButton = document.querySelector('.restart');
const endgameText = document.querySelector('.endgame .text');
let currentPlayer = 'X';
let gameIsLive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'X') {
    endgameText.innerText = `${letter} wins!`;
  } else {
    endgameText.innerText = `${letter} wins!`;
  }
  endgameText.style.color = letter === 'X' ? 'blue' : 'red';
  endgameText.parentElement.style.display = 'block';
};

const checkGameStatus = () => {
  const topLeft = cellElements[0].textContent;
  const topMiddle = cellElements[1].textContent;
  const topRight = cellElements[2].textContent;
  const middleLeft = cellElements[3].textContent;
  const middleMiddle = cellElements[4].textContent;
  const middleRight = cellElements[5].textContent;
  const bottomLeft = cellElements[6].textContent;
  const bottomMiddle = cellElements[7].textContent;
  const bottomRight = cellElements[8].textContent;
  
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      cellElements[a].textContent === currentPlayer &&
      cellElements[b].textContent === currentPlayer &&
      cellElements[c].textContent === currentPlayer
    ) {
      handleWin(currentPlayer);
      return;
    }
  }

  let isDraw = true;
  for (let i = 0; i < cellElements.length; i++) {
    if (cellElements[i].textContent === '') {
      isDraw = false;
      break;
    }
  }
  if (isDraw) {
    endgameText.innerText = 'Draw!';
    endgameText.style.color = 'black';
    endgameText.parentElement.style.display = 'block';
    gameIsLive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const handleCellClick = (e) => {
  const cell = e.target;
  if (!gameIsLive || cell.textContent !== '') {
    return;
  }
  cell.textContent = currentPlayer;
  checkGameStatus();
};

const handleRestartClick = () => {
  currentPlayer = 'X';
  gameIsLive = true;
  endgameText.parentElement.style.display = 'none';
  cellElements.forEach((cell) => {
    cell.textContent = '';
  });
};

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', handleRestartClick);
