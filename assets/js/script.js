const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const net = {
    x: canvas.width/2 - 6/2,
    y: 0,
    width: 6,
    height: canvas.width,
    color: 'white'
};

function drawNet() {
    ctx.fillStyle = net.color
    ctx.fillRect(net.x, net.y, net.width, net.height)
}

function drawBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function render () {
    drawBoard();
    drawNet();
}

render();