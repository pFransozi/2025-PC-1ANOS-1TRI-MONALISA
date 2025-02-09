function setup() {
  //createCanvas(width, height)
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //circle(x, y, diameter)
  circle(200,200,300);
  circle(150,150,60);
  circle(250, 150, 60);
  
  //line(x1, y1, x2, y2)
  line(150, 270, 250, 270)

  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(200, 180, 170, 220, 220, 220)

  if (mouseIsPressed){
    console.log(mouseX, mouseY)
  }
}