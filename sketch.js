function setup() {
  //createCanvas(width, height)
  createCanvas(400, 400);
}

function draw() {
  background("#FF5722");
  //circle(x, y, diameter)
  fill("#03A9F4")
  circle(200,200,300); //rosto
  fill('white');
  circle(150,150,60); //olho esquerdo
  circle(250, 150, 60); //olho direito
  
  //line(x1, y1, x2, y2)
  line(150, 270, 250, 270); //boca

  //triangle(x1, y1, x2, y2, x3, y3)
  fill('#3F51B5');
  triangle(200, 180, 170, 220, 220, 220); //nariz

  line(123,115, 178, 133); //sobrancelha esquerda
  line(225, 116, 279, 106); //sobrancelha direita

  circle(150, 150, 10); // pupila esquerda
  circle(250, 150, 10); // pupila direita

  if (mouseIsPressed){
    console.log(mouseX, mouseY)
  }
}