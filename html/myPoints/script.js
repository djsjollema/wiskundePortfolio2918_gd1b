const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



function animate(){
  let color = "rgb("+ randomNumber(255)+ "," + randomNumber(255) + "," + randomNumber(255) + ")";
  let ball = new Point(randomNumber(canvas.width),randomNumber(canvas.height),randomNumber(50),color);
  ball.draw(context);
}

function randomNumber(max){
  return Math.floor(Math.random()*max);
}

setInterval(animate,1);
