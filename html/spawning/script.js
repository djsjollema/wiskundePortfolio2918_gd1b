const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = {};
ball.point = new Point(500,400,100,"DarkBlue");
ball.pos = new Vector2d(800,500);
ball.vel = new Vector2d(2,1);

function animate(){
  requestAnimationFrame(animate);
  ball.pos.add(ball.vel);
  ball.point.pos(ball.pos);
  ball.point.draw(context);
}

animate();
