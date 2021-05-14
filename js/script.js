var circleX = 0;
var redX = 255;

let button;
function setup() {
  createCanvas(500, 500);
  background(255, 150, 510);
  button = createButton("click me");
  button.position(250, 250);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(250);
  background(val);
}

function draw() {
  // Este es el rectangulo del centro //

  c = color("hsl(160, 100%, 50%)");
  fill(c); // Use 'c' as fill color
  noStroke();
  strokeWeight(4);
  rect(200, 150, 150, 150);

  // Ahora vamos a hacer un circulo en el canvas //

  fill(250, 100, 0, 175);
  noStroke();
  ellipse(circleX, 300, 50, 50);

  circleX = circleX + 1;
}
