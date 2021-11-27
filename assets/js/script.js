// Canvas Variable
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

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
    color: 'white'
};

// User Paddle Variable
const user = {
    x: 10,
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: 'white',
    score: 0
};

// AI Paddle Variable
const ai = {
    x: canvas.width - (20+10),
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: 'white',
    score: 0
}

// Ball Variable
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 15,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'red',
}

// Function used to input the game board
function drawBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function used to input the center net
function drawNet() {
    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height)
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
    ctx.fillStyle = 'white';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

// Function used to input AI score
function drawAiScore(x, y, score) {
    ctx.fillStyle = 'white';
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
let aiSpeed = 0.5;
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
}

// Function to reset ball to center of the canvas
function resetBall() {
// Resets the ball to its original position and speed
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 5;
// When the ball is reset, the direction of ball changes
    ball.velocityX = -ball.velocityX;
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
}

let framePerSecond = 60;
setInterval(gameLoop, 1000/framePerSecond);