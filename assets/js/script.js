// Canvas Variable
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

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

function update() {

// To move the ball along x and y axis
    ball.x += ball.velocityX;
    ball.y += ball.velocityY; 
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