const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numBalls = 10;
let balls = [];

for(let i = 0; i< numBalls; i++){
  let ball = {};
  ball.point = new Point(0,0,5,"DarkBlue");
  ball.pos = new Vector2d(randomNumber(0,canvas.width),randomNumber(0,canvas.height));
  ball.vel = new Vector2d(8,7);
  balls.push(ball);
}

function randomNumber(min,max){
  return Math.random()*(max - min) + min;
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  for (var i = 0; i < balls.length; i++) {
    balls[i].pos.add(balls[i].vel);
    balls[i].point.pos(balls[i].pos);
    balls[i].point.draw(context);
    if(balls[i].pos.dx < balls[i].point.r || balls[i].pos.dx > canvas.width - balls[i].point.r){
      balls[i].vel.dx = -balls[i].vel.dx;
    }
    if(balls[i].pos.dy < balls[i].point.r || balls[i].pos.dy > canvas.height-balls[i].point.r){
      balls[i].vel.dy = -balls[i].vel.dy;
    }
  }

}

animate();
