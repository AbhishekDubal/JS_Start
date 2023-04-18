
const gameSpace       = document.querySelector("#gameSpace");
const context         = gameSpace.getContext("2d");
const scoreBoard      = document.querySelector("#scoreBoard");
const playAgainButton = document.querySelector("#playAgainButton");

const gameWidth       = gameSpace.width;
const gameHeight      = gameSpace.height;

const gameSpaceBackground = "white";
const snakeColor          = "skyblue";
const snakeBorder         = "black";
const foodColor           = "yellow";
const gridSize            = 25;
let running               = false;

let xVelocity   = gridSize; //when the game starts, the snake will move to the right at a speed of unitSize pixels per frame.
let yVelocity   = 0;    // snake will not move vertically when the game starts.

let foodX;
let foodY;

let score = 0;

//defining sanke
let snake   =[
    {x:gridSize * 4, y:0},  //represents the cell at the 5th column and 1st row 
    {x:gridSize * 3, y:0},
    {x:gridSize * 2, y:0},
    {x:gridSize * 1, y:0},
    {x:gridSize * 0, y:0}   //represents the cell at the 1st column and 1st row.
];

window.addEventListener("keydown", changeDirection);

playAgainButton.addEventListener("click", restartGame);

gameStart();

function gameStart(){
    running = true;
    scoreBoard.textContent = `Score: ${score}`;
    createFood();
    drawFood();
    nextTick(); 
}

function createFood(){
    function randomFood(min, max){
        const randomNumber = Math.round((Math.random()*(max-min)+min)/gridSize)*gridSize;
        return randomNumber;
    }
    foodX=randomFood(0,gameWidth-gridSize);
    foodY=randomFood(0,gameWidth-gridSize);
}

function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, gridSize, gridSize)
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearGameSpace();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        },100);
    }else{
        displayGameOver();
    }
}

function clearGameSpace(){
    context.fillStyle= gameSpaceBackground;
    context.fillRect(0,0, gameWidth, gameHeight);
}

function moveSnake(){
    const head = {x:snake[0].x + xVelocity,
                  y:snake[0].y + yVelocity};

    snake.unshift(head);

    //if snake eats
    if(snake[0].x == foodX && snake[0].y == foodY){
        score++;
        scoreBoard.textContent = `Score: ${score}`;
        createFood();
    }
    else{
        snake.pop();
    }
}

function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;

    snake.forEach((snakePart) =>{
        context.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
        context.strokeRect(snakePart.x, snakePart.y, gridSize, gridSize);
    })
}

function changeDirection(event){
    const keyPressed = event.keyCode;
    const Left =37;
    const Up =38;
    const Right =39;
    const Down =40;

    const moveLeft = (xVelocity == -gridSize);
    const moveUp =(yVelocity == -gridSize);
    const moveRight = (xVelocity == gridSize);
    const moveDown = (yVelocity == gridSize);

    switch (true) {
        case (keyPressed == Left && !moveRight):
            xVelocity = -gridSize;
            break;
        
        case (keyPressed == Right && !moveLeft):
            xVelocity == gridSize;
            break;   
        case (keyPressed == Down && !moveUp):
            yVelocity == gridSize;
            break; 
        case (keyPressed == Up && !moveDown):
            yVelocity == -gridSize;
            break;     
    }
}

function checkGameOver(){
    switch(true){
        case(snake[0].x<0):
            running=false;
            break;
        case(snake[0].x >= gameWidth):
            running=false;
            break;
        case(snake[0].y<0):
            running=false;
            break;
        case(snake[0].y >= gameWidth):
            running=false;
            break;
    }

    for(let i=1; i<snake.length; i++){
        if (snake[0].x==snake[i].x && snake[0].y== snake[i].y) {
            running=false;
        }
    }
}

function displayGameOver(){
    context.font="60px MV Boli";
    context.fillStyle="red"
    context.textAlign="center";
    context.filText("Game Over!", gameWidth/2 , gameHeight/2);
    running=false;
}

function restartGame(){
    score = 0;
    xVelocity = gridSize;
    yVelocity = 0;
    snake = [
        {x:gridSize * 4, y:0},
        {x:gridSize * 3, y:0},
        {x:gridSize * 2, y:0},
        {x:gridSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};