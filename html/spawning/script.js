const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numBalls = 1000;
let balls = [];

// for(let i = 0; i< numBalls; i++){
//   let ball = {};
//   ball.point = new Point(0,0,5,"DarkBlue");
//   ball.pos = new Vector2d(randomNumber(0,canvas.width),randomNumber(0,canvas.height));
//   ball.vel = new Vector2d(randomNumber(-10,10),randomNumber(-10,10));
//   balls.push(ball);
// }

function randomNumber(min,max){
  return Math.random()*(max - min) + min;
}

function animate(){
  requestAnimationFrame(animate);
  if(Math.random()<0.1){
      let ball = {};
      ball.point = new Point(0,0,5,"DarkBlue");
      ball.pos = new Vector2d(randomNumber(0,canvas.width),-10);
      ball.vel = new Vector2d(0,randomNumber(0,15));
      balls.push(ball);
  }
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle= "rgba(120,120,255,0.05)"
  context.fillRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < balls.length; i++) {
    balls[i].pos.add(balls[i].vel);
    balls[i].point.pos(balls[i].pos);
    balls[i].point.draw(context);
    // if(balls[i].pos.dx < balls[i].point.r || balls[i].pos.dx > canvas.width - balls[i].point.r){
    //   balls[i].vel.dx = -balls[i].vel.dx;
    // }
    // if(balls[i].pos.dy < balls[i].point.r ){
    //   balls[i].vel.dy = -balls[i].vel.dy;
    // }

    if(balls[i].pos.dy > canvas.height-balls[i].point.r){
      balls.splice(i,1);
    }
  }

}

animate();
