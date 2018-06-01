const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = new Point(200,200,20,'yellow');

let pos = new Vector2d(200,200);
let vel = new Vector2d(8,9);
let acc = new Vector2d(0,1 );

ball.draw(context);

function animation(){
    requestAnimationFrame(animation);
    context.clearRect(0,0,canvas.width,canvas.height);
    vel.add(acc);
    pos.add(vel);
    ball.pos(pos);

    ball.draw(context);


    if(pos.dy> canvas.height){
      vel.dy = - vel.dy;
      pos.dy = canvas.height;
    }

    if(pos.dy < 0){
      vel.dy = -vel.dy;
      pos.dy =0;
    }

    if(pos.dx < 0){
      vel.dx = -vel.dx;
      pos.dx = 0;
    }

    if(pos.dx > canvas.width){
      vel.dx = - vel.dx;
      pos.dx = canvas.width;
    }

}

animation()
