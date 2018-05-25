const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numberOfBalls = 10;
let balls = [];

for (let i = 0; i < numberOfBalls; i++) {
  let object = {};
  object.ball = new Point(200, 200, 50, "red");
  object.speedX = Math.random() * 2;
  object.speedY = Math.random() * 2;
  balls.push(object);
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].ball.draw(context);
    balls[i].ball.x += balls[i].speedX;
    balls[i].ball.y += balls[i].speedY;

    if (balls[i].ball.y > canvas.height - balls[i].ball.r) {
      balls[i].speedY = -balls[i].speedY;
    }

    if (balls[i].ball.x > canvas.width - balls[i].ball.r) {
      balls[i].speedX = -balls[i].speedX;
    }

    if (balls[i].ball.y < balls[i].ball.r) {
      balls[i].speedY = -balls[i].speedY;
    }
    if (balls[i].ball.x < balls[i].ball.r) {
      balls[i].speedX = -balls[i].speedX;
    }

  }
}

animate();
