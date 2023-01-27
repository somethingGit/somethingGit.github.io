// Bubble Sort
// Jason
// 01/09/2023

let someArray = [11, 7, 3, 14, 8, 6, 9, 2];

function setup() {
  createCanvas(400, 400);
  console.log(someArray);
  console.time();
  console.log(bubbleSort(someArray));
  console.timeEnd();
}

function bubbleSort(list) { 
  let notSorted = false;
  let listFinished = 1;
  while(notSorted === false) {
    for(let i = 0; i < list.length - listFinished; i++) {
      list[i] < list[i + 1] ? list = bubbleSortLoop(list) : notSorted = true;
      listFinished++;
    }
  }
  return list;
}

function bubbleSortLoop(list) {
  for(let i = 0; i < list.length - 1; i++) {
    if(list[i] > list[i + 1]) {
      let switchThis = list[i];
      list[i] = list[i + 1];
      list[i + 1] = switchThis;
    }
  }
  console.log(list);
  return list;
}
