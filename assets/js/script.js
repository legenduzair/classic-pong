// Game Variables
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");
const mainGame = document.getElementById('main-game');
const headingSection = document.getElementById('title-screen');
const gameArea = document.getElementById('pong');
const buttonSection = document.getElementById('button-section');
const button = document.getElementById('button');
const homeSection = document.getElementById('home-button');
const gameFinish = document.getElementById('game-over');
const playAgain = document.getElementById('play-again');
const buttonTwo = document.getElementById('button-two');
const highScore = 3;

const userSpeed = 9;
let touchY = 0;
let upArrowKey = false;
let downArrowKey = false;
let framePerSecond = 60;
let gameLoopInterval;

const net = {
    x: canvas.width/2 - 6/2,
    y: 0,
    width: 6,
    height: canvas.height,
    color: '#F3F8F2'
};
const user = {
    x: 10,
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: '#F3F8F2',
    score: 0
};
const ai = {
    x: canvas.width - (20+10),
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: '#F3F8F2',
    score: 0
};
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 15,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: '#A4243B',
};

// Functions to draw the objects

function drawBoard() {
    ctx.fillStyle = '#0B0500';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawNet() {
    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height);
}

function drawUserPaddle() {
    ctx.fillStyle = user.color;
    ctx.fillRect(user.x, user.y, user.width, user.height);
}

function drawAiPaddle() {
    ctx.fillStyle = ai.color;
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
}

/**
 * 
 * @param {number} x - X Coordinate
 * @param {number} y - Y Coordinate
 * @param {number} score - Score
 */
function drawUserScore(x, y, score) {
    ctx.fillStyle = '#F3F8F2';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

/**
 * 
 * @param {number} x - X Coordinate
 * @param {number} y - Y Coordinate
 * @param {number} score - Score
 */
function drawAiScore(x, y, score) {
    ctx.fillStyle = '#F3F8F2';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

/**
 * 
 * @param {number} x - X Coordinate
 * @param {number} y - Y Coordinate
 * @param {number} radius - Radius
 * @param {string} color - Color
 */
function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

/* Paddle Movement */
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

window.addEventListener('touchstart', touchStartHandler);
window.addEventListener('touchmove', touchMoveHandler);

function touchStartHandler(event) {
    if(event.target === canvas) {
        touchY = event.touches[0].clientY;
    }
}

function touchMoveHandler(event) {
    if(event.target === canvas) {
        if(event.touches[0].clientY < touchY) {
            movePlayerUp();
        } else if(event.touches[0].clientY > touchY) {
            movePlayerDown();
        }
        touchY = event.touches[0].clientY;
    }
}

// Function to activate when arrow keys are pressed
function keyDownHandler(event) {
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
    if (upArrowKey && user.y > 0) {
        movePlayerUp();
    } else if (downArrowKey && (user.y < canvas.height - user.height)) {
        movePlayerDown();
    }

// To move the AI paddle
    let aiSpeed = 0.09;
    ai.y += ((ball.y - (ai.y + ai.height/2))) * aiSpeed;

    ball.x += ball.velocityX;
    ball.y += ball.velocityY; 

// To operate collision of the ball with the top and bottom walls
    if(ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
    ball.velocityY = -ball.velocityY;
    }

// To operate collision of the ball with the right and left walls
    if(ball.x + ball.radius >= canvas.width) {
    user.score++;
    resetBall();
    } else if(ball.x - ball.radius <= 0) {
    ai.score++;
    resetBall();
    }

// To determine whether the player is the user or ai
    let player = (ball.x < canvas.width/2) ? user : ai;
// Angle generated depending on which half of the paddle the ball has hit
    if (collisionDetection(ball, player)) {
    let angle = 0;
    if(ball.y < (player.y + player.height/2)) {
    angle = -1 * Math.PI/4;
    } else if(ball.y > (player.y + player.height/2)) {
    angle = Math.PI/4;
    }
    let direction = player === user ? 1 : -1;
    ball.velocityX = direction * ball.speed * Math.cos(angle);
    ball.velocityY = ball.speed * Math.sin(angle);
    ball.speed += 0.2;
    }
}

// Function to move user paddle up
function movePlayerUp() {
    if(user.y - userSpeed < 0){
        user.y = 0;
    } else {
        user.y -= userSpeed;
    }
}

// Function to move user paddle down
function movePlayerDown() {
    if(user.y + userSpeed > canvas.height - user.height) {
        user.y = canvas.height - user.height;
    } else {
        user.y += userSpeed;
    }
}

// Function to reset ball to center of the canvas
function resetBall() {
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 7;
    ball.velocityX = -ball.velocityX;
    ball.velocityY = -ball.velocityY;
}

// Function to reset game
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
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.right = player.x + player.width;
    player.left = player.x;
    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.right = ball.x + ball.radius;
    ball.left = ball.x - ball.radius;

    return ball.top < player.bottom && ball.bottom > player.top && ball.right > player.left && ball.left < player.right;
}

// Function to check high score
function checkScore() {
    if(user.score == highScore || ai.score == highScore) {
        gameOver();
    }
}

// Function to display game over screen
function gameOver() {
    gameArea.style.display = 'none';
    homeSection.style.display = 'none';
    mainGame.style.display = 'none';
    gameFinish.style.display = 'block';
    playAgain.style.display = 'block';
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

window.addEventListener("touchmove", preventBehaviour, {passive: false});

function preventBehaviour(e){
    e.preventDefault();
};

// Event listeners for interactive buttons
button.addEventListener('click', () => {
    showHide(gameArea);
    showHide(headingSection);
    showHide(buttonSection);
    showHide(homeSection);
    mainGame.style.display = 'flex';
    
    gameLoopInterval = setInterval(gameLoop, 1000/framePerSecond);
    resetGame();
});

buttonTwo.addEventListener('click', () => {
    gameArea.style.display = 'block';
    gameFinish.style.display = 'none';
    playAgain.style.display = 'none';
    homeSection.style.display = 'block';
    mainGame.style.display = 'flex';

    resetGame();
});

function showHide(target) {
    if(target.classList.contains('hide')) {
        target.classList.remove('hide');
    } else {
        target.classList.add('hide');
    }
}
