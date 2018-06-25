const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];

function randomNumber(min,max){
  return Math.random()*(max - min) + min;
}

function animate(){
  requestAnimationFrame(animate);
  if(Math.random()<0.4){
      let ball = {};
      ball.point = new Point(0,0,5,'#' + Math.floor(randomNumber(0,255*255*255)).toString(16));
      ball.pos = new Vector2d(randomNumber(0,canvas.width),-10);
      ball.vel = new Vector2d(0,randomNumber(0,15));
      balls.push(ball);
  }
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle= "rgba(0,0,0,0.05)"
  context.fillRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < balls.length; i++) {
    balls[i].pos.add(balls[i].vel);
    balls[i].point.pos(balls[i].pos);
    balls[i].point.draw(context);


    if(balls[i].pos.dy > canvas.height-balls[i].point.r){
      balls.splice(i,1);
    }
  }

}

animate();
