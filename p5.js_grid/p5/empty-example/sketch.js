let diameter = 0;
let squareDistance = 25;
let textBoxSize = 500;
let textPx;
let position = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(255);
  diameter = width / 100;
  textPx = width / 75;
  textBoxSize = textPx * 5;
  fill("white");
  strokeWeight(2);
  mousePosition();
  strokeWeight(0.5);
  fill("gray");
  makeGrid();
  fill(150);
  displayCanvasSize();
  fill("black");
  displayMousePosition();
}

let mousePosition = () => circle(mouseX, mouseY, diameter);

let makeGrid = () => {
  for(let i = 0; i < width; i += squareDistance) {
    line(i, 0, i, height);
    line(0, i, width, i);
  }
};

let displayCanvasSize = () =>  {
  textSize(textPx);
  text(`Canvas Width: ${width}px`, width / 2 - textBoxSize / 2, height / 2 - textBoxSize / 2.25, width / 2 + textBoxSize / 2, height / 2 + textBoxSize / 2.25); 
  text(`Canvas Height: ${height}px`, width / 2 - textBoxSize / 2, height / 2 - textBoxSize / 4, width / 2 + textBoxSize / 2, height / 2 + textBoxSize / 4); 
};

let displayMousePosition = () => text(`(${mouseX}, ${mouseY})`, mouseX + width / 100, mouseY - height / 100);

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  position.push(mouseX);
  position.push(mouseY);
}