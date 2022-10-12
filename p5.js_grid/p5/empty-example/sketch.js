/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let diameter = 0;
let squareDistance = 25;
let textBoxSize = 500;
let textPx;
let savedPosition = [];
let displaySaves = 0;

function setup() {
	// put setup code here
	createCanvas(windowWidth, windowHeight);
  displaySaves = 0;
	frameRate(30);
}

function draw() {
	// put drawing code here
	resizeCanvas(windowWidth, windowHeight);
	background(255);
	displaySaves = 0;
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
	if(displaySaves = 0) {
		displayMousePosition();
		makeSaveButton();
	}
	else if(displaySaves = 1) {
		displaySavedMousePosition();
	}
	console.log(displaySaves);
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
	let textPx = floor(width / 75);
	let rectWidth = textWidth("Click Me To Display Saved Mouse Coordinates");
	let rectHeight = 25;
	fill("black");
	textSize(textPx);
	text("Click Me To Display Saved Mouse Coordinates", width - rectWidth * 5, 0 + rectHeight);
};

let displaySavedMousePosition = () => {
	let textX = 0;
	let textY = 0;
  textLeading(20);
	for(let i = 0; i < savedPosition.length; i += 2) {
		text(`Mouse Position: ${savedPosition[i]}, ${savedPosition[i + 1]}`, textX, textY);
	}
};

let windowResized = () => resizeCanvas(windowWidth, windowHeight);

function mouseClicked() {
	savedPosition.push(mouseX);
	savedPosition.push(mouseY);
}
/*
function doubleClicked() {
  if(mouseX < width && mouseX > width - textWidth("Click Me To Display Saved Mouse Coordinates") && mouseY < 25 && mouseY > 0) {
    displaySaves = true;
  }
  displaySaves = true;
}*/