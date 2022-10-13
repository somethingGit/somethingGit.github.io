/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let diameter, squareDistance, textBoxSize, textPx, savedPosition, displaySaves;
//Sets up canvas and sets global varibles
function setup() {
	// put setup code here
	createCanvas(windowWidth, windowHeight);
  	displaySaves = 0;
	diameter = 0;
	squareDistance = 25;
	textBoxSize = 500;
	savedPosition = [];
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
	if(displaySaves === 0) {
		displayMousePosition();
		makeSaveButton();
	}
	else if(displaySaves === 1) {
		displaySavedMousePosition();
	}
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
//Makes text that when clicked should make another function display the mouse positions
let makeSaveButton = () => {
	let textPx = floor(width / 75);
	let rectWidth = textWidth("Click Me To Display Saved Mouse Coordinates");
	let rectHeight = 25;
	fill("black");
	textSize(textPx);
	text("Click Me To Display Saved Mouse Coordinates", width - rectWidth * 5, 0 + rectHeight);
};
//Shows the mouse positions that have been saved
let displaySavedMousePosition = () => {
	let textX = 0;
	let textY = 0;
  textLeading(20);
	for(let i = 0; i < savedPosition.length; i += 2) {
		text(`Mouse Position: ${savedPosition[i]}, ${savedPosition[i + 1]}`, textX, textY);
	}
};
//Resizes the window
let windowResized = () => resizeCanvas(windowWidth, windowHeight);
//Saves mouse position in a list
function mouseClicked() {
	savedPosition.push(mouseX);
	savedPosition.push(mouseY);
	dispalySaves = 1;
}
//Starts the displaying of saved mouse positions when double clicking a square. 
function doubleClicked() {
  if(mouseX < width && mouseX > width - textWidth("Click Me To Display Saved Mouse Coordinates") && mouseY < 25 && mouseY > 0) {
    displaySaves = 1;
  }
  displaySaves = 1;
}