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
  makeSaveButton();
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
  let textBoxXPosition = [width / 2 - textBoxSize / 2, width / 2 + textBoxSize / 2, width / 2 - textBoxSize / 2, width / 2 + textBoxSize / 2];
  let textBoxYPosition = [height / 2 - textBoxSize / 2.25, height / 2 + textBoxSize / 2.25, height / 2 - textBoxSize / 4, height / 2 + textBoxSize / 4];
  text(`Canvas Width: ${width}px`, textBoxXPosition[0], textBoxYPosition[0], textBoxXPosition[1], textBoxYPosition[1]); 
  text(`Canvas Height: ${height}px`, textBoxXPosition[2], textBoxYPosition[2], textBoxXPosition[3], textBoxYPosition[3]); 
};

let displayMousePosition = () => text(`(${mouseX}, ${mouseY})`, mouseX + width / 100, mouseY - height / 100);

let makeSaveButton = () => {
  fill("gray");
  let rectWidth = 100;
  let rectHeight = 25;
  let rectX = width - rectWidth;
  let rectY = 0;
  let textPX = 25;
  rect(rectX, rectY, rectWidth, rectHeight);
  fill("white");
  textSize(textPx);
  text("Click Me To Display Saved Mouse Coordinates", width - rectWidth * 5, 0 + rectHeight);
}

let displaySavedMousePosition = () => {
  let textX = 0;
  let textY = 0;
  for(let i = 0; i < position.length(); i += 2) {
    text(`Mouse Position: ${position[i]}, ${position[i + 1]}`);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  position.push(mouseX);
  position.push(mouseY);

}
