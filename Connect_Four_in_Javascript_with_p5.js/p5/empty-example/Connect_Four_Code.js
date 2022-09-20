//Uses a list to fake a grid
let grid = [
  0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 
];
  //Declares the current player which is currently nothing
let player = 0;

//Declares the columns of a fake grid and the list length
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
const gridLength = grid.length();

function connectFour(mouseXPos, column1, column2, column3, column4, column5, column6, column7) {

  if(player === 1) {
    player = 2; 
  }
  else if(player === 2) {
    player = 1; 

  }
  else {
    player = 1;
  }

  if(mouseXPos > column7) {
    g++;
  }
  else if(mouseXPos > column6) {
    f++;
  }
  else if(mouseXPos > column5) {
    e++;
  }
  else if(mouseXPos > column4) {
    d++;
  }
  else if(mouseXPos > column3) {
    c++;
  }
  else if(mouseXPos > column2) {
    b++;
  }
  else if(mouseXPos > column1) {
    a++;
  }
}

/* eslint-disable */
export {connectFour};
/* eslint-enable */