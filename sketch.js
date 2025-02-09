function setup() {
  //createCanvas(width, height)
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background("#FF5722");
  fill("#03A9F4")
  //circle(x, y, diameter)
  circle(200,200,300); //rosto
  fill('white');
  circle(150,150,60); //olho esquerdo
  circle(250, 150, 60); //olho direito
  
  //line(x1, y1, x2, y2)
  line(150, 270, 250, 270); //boca

  fill('#3F51B5');
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(200, 180, 170, 220, 220, 220); //nariz

  line(123,115, 178, 133); //sobrancelha esquerda
  line(225, 116, 279, 106); //sobrancelha direita

  //circle(150, 150, 10); // pupila esquerda
  //circle(250, 150, 10); // pupila direita

  //A bola só se move entre as coordenadas 130 e 170 tanto no eixo X quanto no eixo Y.
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); // nova pupila direita

  if (mouseIsPressed){
    console.log(mouseX, mouseY)
  }
}