// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Dog {
  constructor(dogName) {
    this.name = dogName;
    this.age = 0;
  }
  
  bark() {
    console.log(`Bark says ${this.name}`);
  }
}

let myDog = new Dog("SomeName");
let yourDog = new Dog("Max");

function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark();
  yourDog.bark();
}

function draw() {
  background(220);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}