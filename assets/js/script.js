const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

/* Game Objects */

const net = {
    x: canvas.width/2 - 6/2,
    y: 0,
    width: 6,
    height: canvas.height,
    color: 'white'
};

const user = {
    x: 10,
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: 'white',
    score: 0
};

const ai = {
    x: canvas.width - (20+10),
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: 'white',
    score: 0
}

const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    color: 'red',
}

function drawBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawNet() {
    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height)
}

function drawUserPaddle() {
    ctx.fillStyle = user.color;
    ctx.fillRect(user.x, user.y, user.width, user.height);
}

function drawAiPaddle() {
    ctx.fillStyle = ai.color;
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
}

function drawUserScore(x, y, score) {
    ctx.fillStyle = 'white';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

function drawAiScore(x, y, score) {
    ctx.fillStyle = 'white';
    ctx.font = '50px fantasy';
    ctx.fillText(score, x, y);
}

function render() {
    drawBoard();
    drawNet();
    drawUserPaddle();
    drawAiPaddle();
    drawUserScore(canvas.width/4, canvas.height/10, user.score);
    drawAiScore(3*canvas.width/4, canvas.height/10, ai.score);
}

render();