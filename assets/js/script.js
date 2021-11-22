const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

/* Game Objects */

const net = {
    x: canvas.width/2 - 6/2,
    y: 0,
    width: 6,
    height: canvas.width,
    color: 'white'
};

const user = {
    x: 10,
    y: canvas.height/2 - 150/2,
    width: 20,
    height: 150,
    color: 'white'
};

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

function render () {
    drawBoard();
    drawNet();
    drawUserPaddle();
}

render();