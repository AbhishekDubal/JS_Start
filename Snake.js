
const gameBoard = document.querySelector("#gameBoard");
const contextOnBoard =gameBoard.getContext("2d");

const restartButton = document.querySelector("#restartButton");
const scoreBoard = document.querySelector("#scoreBoard");

let eachPixel = 25;
let score = 0;
let snake = [
    {x:eachPixel * 4, y:0},
    {x:eachPixel * 3, y:0},
    {x:eachPixel * 2, y:0},
    {x:eachPixel * 1, y:0},
    {x:0, y:0}
];

let foodX, foodY;
const snakeColor = "skyblue";
const snakeBorder= "black";
const foodColor = "red";
const gameBoardBackground = "white";

const widthOfGame = gameBoard.width;
const heightOfGame = gameBoard.height;

let xVelocity = eachPixel;
let yVelocity = 0;

snakeRunning = false;

window.addEventListener("keydown", changeMovingDirection);
restartButton.addEventListener("click", restartGame);

startGame();

function startGame(){
    snakeRunning = true;
    createFood();
    displayFood();
    nextTick();
}

function nextTick(){
    if(snakeRunning){
        setTimeout(() => {
            clearGameBoard();
            displaySnake();
            moveSnake();
            displayFood();
            checkGameIsOver();
            nextTick();
        }, 100);
    }else{
        displayGameOver();
    }
}
function createFood(){
    function randomFood(min, max){
        const randomNumber = Math.round((Math.random() * (max - min)+ min)/eachPixel)*eachPixel;
    return randomNumber;
    }

    foodX = randomFood(0, widthOfGame - eachPixel);
    foodY = randomFood(0, heightOfGame - eachPixel);
}

function displayFood(){
    contextOnBoard.fillStyle = foodColor;
    contextOnBoard.fillRect(foodX, foodY, eachPixel, eachPixel);
}

function clearGameBoard(){
    contextOnBoard.fillStyle = gameBoardBackground;
    contextOnBoard.fillRect(0, 0, widthOfGame, heightOfGame);
}

function moveSnake(){
    const headOfSnake = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};

    snake.unshift(headOfSnake);

    if(snake[0].x == foodX && snake[0].y == foodY){
        score +=1;
        scoreBoard.textContent = `Score: ${score}`;
        createFood();
    }else{
        snake.pop();
    }
}

function displaySnake(){
    contextOnBoard.fillStyle = snakeColor;
    contextOnBoard.strokeStyle = snakeBorder;

    snake.forEach((snakeBodyPart)=>{
        contextOnBoard.fillRect(snakeBodyPart.x, snakeBodyPart.y, eachPixel,eachPixel);
        contextOnBoard.strokeRect(snakeBodyPart.x, snakeBodyPart.y, eachPixel, eachPixel)
    })
}

function changeMovingDirection(event){
    const keyPressed = event.keyCode;

    const Left = 37;
    const Up   = 38;
    const Right= 39;
    const Down = 40;

    const movesLeft = (xVelocity == -eachPixel);
    const movesRight = (xVelocity == eachPixel);
    const movesUp   = (yVelocity == -eachPixel);
    const movesDown = (yVelocity == eachPixel);

    switch (true) {
        case (keyPressed == Left  && !movesRight):
            xVelocity = -eachPixel;
            yVelocity =0;
            break;
        
        case (keyPressed == Right && !movesLeft):
            xVelocity = +eachPixel;
            yVelocity =0;
            break;

        case (keyPressed == Up && !movesDown):
            yVelocity = -eachPixel;
            xVelocity =0;
            break;
            
        case (keyPressed == Down && !movesUp):
            yVelocity = eachPixel;
            xVelocity =0;
            break;
    }
}


function checkGameIsOver(){

    switch (true) {
        case (snake[0].x < 0):
            snakeRunning = false;
            break;
        case (snake[0].y < 0):
            snakeRunning = false;
            break;
        case (snake[0].x >= widthOfGame):
            snakeRunning = false;
            break;
        case (snake[0].y >= heightOfGame):
            snakeRunning = false;
            break;
    }

    for(let i=1; i<snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
        snakeRunning = false;
    }
}

function displayGameOver(){
    contextOnBoard.font = "70px Mv boli";
    contextOnBoard.fillStyle = "red";
    contextOnBoard.textAlign = "center";
    contextOnBoard.fillText("Game Over!", widthOfGame/2, heightOfGame/2);
    snakeRunning = false;
}

function restartGame(){
    score = 0;
    scoreBoard.textContent = `Score: ${score}`
    snakeRunning = true;
    
    xVelocity = eachPixel;
    yVelocity = 0;
    snake = [
        {x:eachPixel * 4, y:0},
        {x:eachPixel * 3, y:0},
        {x:eachPixel * 2, y:0},
        {x:eachPixel * 1, y:0},
        {x:0, y:0}
    ];
    startGame();
}
