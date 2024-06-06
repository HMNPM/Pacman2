const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const pacMan = {
    x: 50,
    y: 50,
    size: 20,
    dx: 2,
    dy: 0
};

function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacMan.x, pacMan.y, pacMan.size, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacMan.x, pacMan.y);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(pacMan.x - 5, pacMan.y - 7, 3, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

function movePacMan() {
    pacMan.x += pacMan.dx;
    pacMan.y += pacMan.dy;

    if (pacMan.x + pacMan.size > canvas.width || pacMan.x - pacMan.size < 0) {
        pacMan.dx *= -1;
    }
    if (pacMan.y + pacMan.size > canvas.height || pacMan.y - pacMan.size < 0) {
        pacMan.dy *= -1;
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPacMan();
    movePacMan();

    requestAnimationFrame(update);
}

function changeDirection(e) {
    if (e.key === 'ArrowRight') {
        pacMan.dx = 2;
        pacMan.dy = 0;
    } else if (e.key === 'ArrowLeft') {
        pacMan.dx = -2;
        pacMan.dy = 0;
    } else if (e.key === 'ArrowUp') {
        pacMan.dx = 0;
        pacMan.dy = -2;
    } else if (e.key === 'ArrowDown') {
        pacMan.dx = 0;
        pacMan.dy = 2;
    }
}

document.addEventListener('keydown', changeDirection);

update();
