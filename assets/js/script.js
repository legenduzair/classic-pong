const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

function render() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

render();