const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let isRunning = false;
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 2,
    dy: -2,
    radius: 10
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function update() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    }

    ball.x += ball.dx;
    ball.y += ball.dy;

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isRunning) {
        isRunning = true;
        update();
    }
});

// Initial draw
drawBall();
