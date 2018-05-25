class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.lineWidth= 4;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();  }
}
