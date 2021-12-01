// Canvas Variable
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");
const mainGame = document.getElementById('main-game');
const headingSection = document.getElementById('title-screen');
const gameArea = document.getElementById('pong');
const buttonSection = document.getElementById('button-section');
const button = document.getElementById('button');
const homeSection = document.getElementById('home-button');
const home = document.getElementById('home');
const gameFinish = document.getElementById('game-over');
const playAgain = document.getElementById('play-again');
const buttonTwo = document.getElementById('button-two');
const highScore = 3;

// Movement keys variables
let upArrowKey = false;
let downArrowKey = false;

/* Game Objects */
// Net Variable
const net = {
    x: canvas.width/2 - 6/2,
    y: 0,
    width: 6,
    height: canvas.height,
    color: '#F3F8F2'
};

// User Paddle Variable
const user = {
    x: 10,
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: '#F3F8F2',
    score: 0
};

// AI Paddle Variable
const ai = {
    x: canvas.width - (20+10),
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: '#F3F8F2',
    score: 0
};

// Ball Variable
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 15,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: '#A4243B',
};

// Function used to input the game board
function drawBoard() {
    ctx.fillStyle = '#0B0500';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function used to input the center net
function drawNet() {
    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height);
}

// Function used to input the user paddle
function drawUserPaddle() {
    ctx.fillStyle = user.color;
    ctx.fillRect(user.x, user.y, user.width, user.height);
}

// Function used to input the AI paddle
function drawAiPaddle() {
    ctx.fillStyle = ai.color;
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
}

// Function used to input the user score
function drawUserScore(x, y, score) {
    ctx.fillStyle = '#F3F8F2';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

// Function used to input AI score
function drawAiScore(x, y, score) {
    ctx.fillStyle = '#F3F8F2';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

// Function used to draw the ball
function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

/* Paddle Movement */
// Event listener for when pressing and releasing movement keys
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

// Function to activate when arrow keys are pressed
function keyDownHandler(event) {
    // Acquire the keyCode for both up and down arrow keys
    switch (event.keyCode) {
        case 38:
            upArrowKey = true;
            break;
        case 40:
            downArrowKey = true;
            break;
    }
}

// Function to activate when arrow keys are released
function keyUpHandler(event) {
    switch (event.keyCode) {
        case 38:
            upArrowKey = false;
            break;
        case 40:
            downArrowKey = false;
            break;
    }
}

// Function that includes all of the calculations created to operate the game 
function update() {

// To move the user paddle
let userSpeed = 9;
if (upArrowKey && user.y > 0) {
    user.y -= userSpeed;
} else if (downArrowKey && (user.y < canvas.height - user.height)) {
    user.y += userSpeed;
}

// To move the AI paddle
let aiSpeed = 0.09;
ai.y += ((ball.y - (ai.y + ai.height/2))) * aiSpeed;

// To move the ball along x and y axis
    ball.x += ball.velocityX;
    ball.y += ball.velocityY; 

// To operate collision of the ball with the top and bottom walls
if(ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
    ball.velocityY = -ball.velocityY;
}

// To operate collision of the ball with the right wall
if(ball.x + ball.radius >= canvas.width) {
    // User scores one point and ball resets
    user.score++;
    resetBall();
// To operate collision of the ball with the left wall
} else if(ball.x - ball.radius <= 0) {
    // AI scores one point and ball resets
    ai.score++;
    resetBall();
}

// To determine whether the player is the user or ai
let player = (ball.x < canvas.width/2) ? user : ai;
if (collisionDetection(ball, player)) {
// Default angle of deflected ball is 0 degrees
let angle = 0;
// If the ball hits the top half of the paddle
if(ball.y < (player.y + player.height/2)) {
// Then it will deflect off the paddle with an angle of -45 degrees (-1* PI/4)
    angle = -1 * Math.PI/4;
// If the ball hits the bottom half of the paddle
} else if(ball.y > (player.y + player.height/2)) {
// Then it will deflect off the paddle with an angle of 45 degrees (PI/4)
    angle = Math.PI/4;
}
// Declared direction variable to determine the velocity of the ball along the x axis depending on which player (user or ai) collides with it
// If user collides with the ball, the velocity is positive (1) but if the ai collides with the ball, the velocity is negative (-1)
let direction = player === user ? 1 : -1;
// Changes velocity of the ball along the X axis using the direction variable
ball.velocityX = direction * ball.speed * Math.cos(angle);
// Changes velocity of the ball along the Y axis
ball.velocityY = ball.speed * Math.sin(angle);
// Ball speed increases everytime the ball collides with the player
ball.speed += 0.2;
}
}

// Function to reset ball to center of the canvas
function resetBall() {
// Resets the ball to its original position and speed
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 7;
// When the ball is reset, the direction of ball changes
    ball.velocityX = -ball.velocityX;
    ball.velocityY = -ball.velocityY;
}

function resetGame() {
    resetBall();
    user.score = 0;
    ai.score = 0;
    user.x = 10;
    user.y = canvas.height/2 - 150/2;
    ai.x = canvas.width - (20+10);
    ai.y = canvas.height/2 - 150/2;
}
// Function to detect collision of ball with user and ai paddles
function collisionDetection(ball, player){
// Sets the top, bottom, right and left positions of paddles
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.right = player.x + player.width;
    player.left = player.x;
// Sets the top, bottom, right and left positions of the ball
    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.right = ball.x + ball.radius;
    ball.left = ball.x - ball.radius;
// Combines both to generate a return statement to be true, if not false
    return ball.top < player.bottom && ball.bottom > player.top && ball.right > player.left && ball.left < player.right;
}

function checkScore() {
    if(user.score == highScore || ai.score == highScore) {
        gameOver();
    }
}

function gameOver() {
    gameArea.style.display = 'none';
    gameFinish.style.display = 'block';
    playAgain.style.display = 'block';
    homeSection.style.display = 'none';
    mainGame.style.display = 'none';
    
    resetGame();
}

// Function to render all drawn objects
function render() {
    drawBoard();
    drawNet();
    drawUserPaddle();
    drawAiPaddle();
    drawUserScore(canvas.width/4, canvas.height/10, user.score);
    drawAiScore(3*canvas.width/4, canvas.height/10, ai.score);
    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

// Calls gameLoop function 60 times per 1000ms (1 second)
function gameLoop() {
    render();
    update();
    checkScore();
}

button.addEventListener('click', () => {
    showHide(gameArea);
    showHide(headingSection);
    showHide(buttonSection);
    showHide(homeSection);
    
    resetGame();
})

buttonTwo.addEventListener('click', () => {
    gameArea.style.display = 'block';
    gameFinish.style.display = 'none';
    playAgain.style.display = 'none';
    homeSection.style.display = 'block';
    mainGame.style.display = 'flex';

    resetGame();
})

function showHide(target) {
    if(target.classList.contains('hide')) {
        target.classList.remove('hide')
    } else {
        target.classList.add('hide')
    }
}

let framePerSecond = 60;
setInterval(gameLoop, 1000/framePerSecond);