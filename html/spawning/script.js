const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = {};
ball.point = new Point(500,400,100,"DarkBlue");
ball.pos = new Vector2d(800,500);
ball.vel = new Vector2d(8,7);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  ball.pos.add(ball.vel);
  ball.point.pos(ball.pos);
  ball.point.draw(context);
  if(ball.pos.dx < ball.point.r || ball.pos.dx > canvas.width - ball.point.r){
    ball.vel.dx = -ball.vel.dx;
  }
  if(ball.pos.dy < ball.point.r || ball.pos.dy > canvas.height-ball.point.r){
    ball.vel.dy = -ball.vel.dy;
  }
}

animate();
