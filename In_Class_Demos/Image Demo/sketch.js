// Image Demo
// Jason
// 09/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img;
let reduceSize = 1;
function preload() {
  img = loadImage("assets/percula_lg-1sm.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  let inp = createInput("");
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);
}

function draw() {
  background(220);
  image(img, mouseX, mouseY, img.width * reduceSize, img.height * reduceSize);
}

function myInputEvent() {
  console.log("you are typing: ", this.value());
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    reduceSize += 0.1;
  } 
  else if (keyCode === DOWN_ARROW) {
    reduceSize -= 0.1;
  }
}