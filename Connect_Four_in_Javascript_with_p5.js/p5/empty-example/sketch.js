import connectFour from './Connect_Four_Code'; // eslint-disable-line

//Declares the framerate of the connect four game.
let fr = 144;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  /*
  frameRate(fr);
  */
}

function draw() {
  background(220);
  resizeCanvas(windowWidth, windowHeight);

  //Sets the shape parameters
  let length = windowHeight / 1.5;
  let x = windowWidth / 2 - length / 2;
  let y = windowHeight / 2 - length / 2;
  let d = length / 10;
  let dif = length / 14 * 2;

  //Sets up the graphic columns and rows.
  const column1 = x + length / 14;
  const column2 = column1 + dif;
  const column3 = column2 + dif;
  const column4 = column3 + dif;
  const column5 = column4 + dif; 
  const column6 = column5 + dif;
  const column7 = column6 + dif;

  const row1 = y + length / 14;
  const row2 = row1 + dif;
  const row3 = row2 + dif;
  const row4 = row3 + dif;
  const row5 = row4 + dif;
  const row6 = row5 + dif;
  const row7 = row6 + dif;

  /*
  let token1x = 0;
  let token1y = 0;
  let token2x = 0;
  let token2y = 0;
  let token3x = 0;
  let token3y = 0;
  let token4x = 0;
  let token4y = 0;
  let token5x = 0;
  let token5y = 0;
  let token6x = 0;
  let token6y = 0;
  let token7x = 0;
  let token7y = 0;
  let token8x = 0;
  let token8y = 0;
  let token9x = 0;
  let token9y = 0;
  let token10x = 0;
  let token10y = 0;
  let token11x = 0;
  let token11y = 0;
  let token12x = 0;
  let token12y = 0;
  let token13x = 0;
  let token13y = 0;
  let token14x = 0;
  let token14y = 0;
  let token15x = 0;
  let token15y = 0;
  let token16x = 0;
  let token16y = 0;
  let token17x = 0;
  let token17y = 0;
  let token18x = 0;
  let token18y = 0;
  let token19x = 0;
  let token19y = 0;
  let token20x = 0;
  let token20y = 0;
  let token21x = 0;
  let token21y = 0;
  let token22x = 0;
  let token22y = 0;
  let token23x = 0;
  let token23y = 0;
  let token24x = 0;
  let token24y = 0;
  let token25x = 0;
  let token25y = 0;
  let token26x = 0;
  let token26y = 0;
  let token27x = 0;
  let token27y = 0;
  let token28x = 0;
  let token28y = 0;
  let token29x = 0;
  let token29y = 0;
  let token30x = 0;
  let token30y = 0;
  let token31x = 0;
  let token31y = 0;
  let token32x = 0;
  let token32y = 0;
  let token33x = 0;
  let token33y = 0;
  let token34x = 0;
  let token34y = 0;
  let token35x = 0;
  let token35y = 0;
  let token36x = 0;
  let token36y = 0;
  let token37x = 0;
  let token37y = 0;
  let token38x = 0;
  let token38y = 0;
  let token39x = 0;
  let token39y = 0;
  let token40x = 0;
  let token40y = 0;
  let token41x = 0;
  let token41y = 0;
  let token42x = 0;
  let token42y = 0;
  let token43x = 0;
  let token43y = 0;
  let token44x = 0;
  let token44y = 0;
  let token45x = 0;
  let token45y = 0;
  let token46x = 0;
  let token46y = 0;
  let token47x = 0;
  let token47y = 0;
  let token48x = 0;
  let token48y = 0;
  let token49x = 0;
  let token49y = 0;
  
  let color1 = 255;
  let color2 = 255;
  let color3 = 255;
  let color4 = 255;
  let color5 = 255;
  let color6 = 255;
  let color7 = 255;
  let color8 = 255;
  let color9 = 255;
  let color10 = 255;
  let color11 = 255;
  let color12 = 255;
  let color13 = 255;
  let color14 = 255;
  let color15 = 255;
  let color16 = 255;
  let color17 = 255;
  let color18 = 255;
  let color19 = 255;
  let color20 = 255;
  let color21 = 255;
  let color22 = 255;
  let color23 = 255;
  let color24 = 255;
  let color25 = 255;
  let color26 = 255;
  let color27 = 255;
  let color28 = 255;
  let color29 = 255;
  let color30 = 255;
  let color31 = 255;
  let color32 = 255;
  let color33 = 255;
  let color34 = 255;
  let color35 = 255;
  let color36 = 255;
  let color37 = 255;
  let color38 = 255;
  let color39 = 255;
  let color40 = 255;
  let color41 = 255;
  let color42 = 255;
  let color43 = 255;
  let color44 = 255;
  let color45 = 255;
  let color46 = 255;
  let color47 = 255;
  let color48 = 255;
  let color49 = 255;

  square(x, y, length);
  fill(color1);
  circle(column1, row1, d);
  fill(color2);
  circle(column1, row2, d);
  fill(color3);
  circle(column1, row3, d);
  fill(color4);
  circle(column1, row4, d);
  fill(color5);
  circle(column1, row5, d);
  fill(color6);
  circle(column1, row6, d);
  fill(color7);
  circle(column1, row7, d);
  fill(color8);
  circle(column2, row1, d);
  fill(color9);
  circle(column2, row2, d);
  fill(color10);
  circle(column2, row3, d);
  fill(color11);
  circle(column2, row4, d);
  fill(color12);
  circle(column2, row5, d);
  fill(color13);
  circle(column2, row6, d);
  fill(color14);
  circle(column2, row7, d);
  fill(color15);
  circle(column3, row1, d);
  fill(color16);
  circle(column3, row2, d);
  fill(color17);
  circle(column3, row3, d);
  fill(color18);
  circle(column3, row4, d);
  fill(color19);
  circle(column3, row5, d);
  fill(color20);
  circle(column3, row6, d);
  fill(color21);
  circle(column3, row7, d);
  fill(color22);
  circle(column4, row1, d);
  fill(color23);
  circle(column4, row2, d);
  fill(color24);
  circle(column4, row3, d);
  fill(color25);
  circle(column4, row4, d);
  fill(color26);
  circle(column4, row5, d);
  fill(color26);
  circle(column4, row6, d);
  fill(color27);
  circle(column4, row7, d);
  fill(color28);
  circle(column5, row1, d);
  fill(color29);
  circle(column5, row2, d);
  fill(color30);
  circle(column5, row3, d);
  fill(color31);
  circle(column5, row4, d);
  fill(color32);
  circle(column5, row5, d);
  fill(color33);
  circle(column5, row6, d);
  fill(color34);
  circle(column5, row7, d);
  fill(color35);
  circle(column6, row1, d);
  fill(color36);
  circle(column6, row2, d);
  fill(color37);
  circle(column6, row3, d);
  fill(color38);
  circle(column6, row4, d);
  fill(color39);
  circle(column6, row5, d);
  fill(color40);
  circle(column6, row6, d);
  fill(color41);
  circle(column6, row7, d);
  fill(color42);
  circle(column7, row1, d);
  fill(color43);
  circle(column7, row2, d);
  fill(color44);
  circle(column7, row3, d);
  fill(color45);
  circle(column7, row4, d);
  fill(color46);
  circle(column7, row5, d);
  fill(color47);
  circle(column7, row6, d);
  fill(color48);
  circle(column7, row7, d);

  //Tokens
  fill(255);
  circle(token1x, token1y, d);
  fill(255);
  circle(token2x, token2y, d);
  fill(255);
  circle(column1, row3, d);
  fill(255);
  circle(column1, row4, d);
  fill(255);
  circle(column1, row5, d);
  fill(255);
  circle(column1, row6, d);
  fill(255);
  circle(column1, row7, d);
  fill(255);
  circle(column2, row1, d);
  fill(255);
  circle(column2, row2, d);
  fill(255);
  circle(column2, row3, d);
  fill(255);
  circle(column2, row4, d);
  fill(255);
  circle(column2, row5, d);
  fill(255);
  circle(column2, row6, d);
  fill(255);
  circle(column2, row7, d);
  fill(255);
  circle(column3, row1, d);
  fill(255);
  circle(column3, row2, d);
  fill(255);
  circle(column3, row3, d);
  fill(255);
  circle(column3, row4, d);
  fill(255);
  circle(column3, row5, d);
  fill(255);
  circle(column3, row6, d);
  fill(255);
  circle(column3, row7, d);
  fill(255);
  circle(column4, row1, d);
  fill(255);
  circle(column4, row2, d);
  fill(255);
  circle(column4, row3, d);
  fill(255);
  circle(column4, row4, d);
  fill(255);
  circle(column4, row5, d);
  fill(255);
  circle(column4, row6, d);
  fill(255);
  circle(column4, row7, d);
  fill(255);
  circle(column5, row1, d);
  fill(255);
  circle(column5, row2, d);
  fill(255);
  circle(column5, row3, d);
  fill(255);
  circle(column5, row4, d);
  fill(255);
  circle(column5, row5, d);
  fill(255);
  circle(column5, row6, d);
  fill(255);
  circle(column5, row7, d);
  fill(255);
  circle(column6, row1, d);
  fill(255);
  circle(column6, row2, d);
  fill(255);
  circle(column6, row3, d);
  fill(255);
  circle(column6, row4, d);
  fill(255);
  circle(column6, row5, d);
  fill(255);
  circle(column6, row6, d);
  fill(255);
  circle(column6, row7, d);
  fill(255);
  circle(column7, row1, d);
  fill(255);
  circle(column7, row2, d);
  fill(255);
  circle(column7, row3, d);
  fill(255);
  circle(column7, row4, d);
  fill(255);
  circle(column7, row5, d);
  fill(255);
  circle(column7, row6, d);
  fill(255);
  circle(column7, row7, d);
  fill(255);
*/


  if(mouseX) {
    let thing = 0;
  }

  if(mouseClicked === true) {
    connectFour(mouseX, column1, column2, column3, column4, column5, column6, column7);

  }

}
