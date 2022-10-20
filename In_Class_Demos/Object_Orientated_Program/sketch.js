// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let student = {
  name : "J", age : "13"
};

let otherStudent = student;
otherStudent.name = "me";

function setup() {
  createCanvas(windowWidth, windowHeight); 
  console.log(student.name, otherStudent.name);
}