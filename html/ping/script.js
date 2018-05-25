const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = new Point(200,200,50,"red");
let speedX = 1;
let speedY = 1;
ball.draw(context)

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  ball.draw(context);
  ball.x += speedX;
  ball.y += speedY;

  if(ball.y > canvas.height-ball.r){
    speedY = -speedY;
  }

  if(ball.x > canvas.width-ball.r){
    speedX = -speedX;
  }

  if(ball.y <ball.r){
    speedY = - speedY;
  }

  if(ball.x < ball.r){
    speedX = -speedX;
  };
}

animate();
