// p5.js grid positions. 
// Jason
// Sept 04 2022
//
// Extra for Experts:
// - I added the ability to resize the canvas based off the window size. 

let diameter, squareDistance, textBoxSize, textPx, savedPosition, displaySaves, savedText1, savedText2;
//Sets up canvas and sets global varibles
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  displaySaves = 0;
  diameter = 0;
  squareDistance = 25;
  textBoxSize = 500;
  savedText1 = "", savedText2 = "";
  frameRate(30);
}
//Draw loop that draws functions
function draw() {
  // put drawing code here
  resizeCanvas(windowWidth, windowHeight);
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
  displaySavedMousePosition();
}
//Shows mouse position with a circle.
let mousePosition = () => circle(mouseX, mouseY, diameter);
//Makes a grid
let makeGrid = () => {
  for(let i = 0; i < width; i += squareDistance) {
	line(i, 0, i, height);
  	line(0, i, width, i);
  }
};
//Shows canvas size in the middle of the screen
let displayCanvasSize = () =>  {
	textSize(textPx);
	let textBoxXPosition = [width / 2 - textBoxSize / 2, width / 2 + textBoxSize / 2, width / 2 - textBoxSize / 2, width / 2 + textBoxSize / 2];
	let textBoxYPosition = [height / 2 - textBoxSize / 2.25, height / 2 + textBoxSize / 2.25, height / 2 - textBoxSize / 4, height / 2 + textBoxSize / 4];
	text(`Canvas Width: ${width}px`, textBoxXPosition[0], textBoxYPosition[0], textBoxXPosition[1], textBoxYPosition[1]); 
	text(`Canvas Height: ${height}px`, textBoxXPosition[2], textBoxYPosition[2], textBoxXPosition[3], textBoxYPosition[3]); 
};
//Displays text of the mouse position
let displayMousePosition = () => text(`(${mouseX}, ${mouseY})`, mouseX + width / 100, mouseY - height / 100);
//Displays the saved mouse position in the top left corner of the screen
let displaySavedMousePosition = () => {
  text(`${savedText1}, ${savedText2}`, 5, 20);
};
//Resizes the window
let windowResized = () => resizeCanvas(windowWidth, windowHeight);
//Saves mouse position in a list
function mouseClicked() {
  savedText1 = mouseX;
  savedText2 = mouseY;
}
