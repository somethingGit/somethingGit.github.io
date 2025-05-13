// Selection Sort
// Jason
// 01/10/2023

let someArray = [5, 15, 3, 8, 9, 1, 20, 7];

function main() {
  console.log(selectionSort(someArray));
}

function selectionSort(list) {
  let largest = 0;
  let listAmount = 1; 
  for(let i = 0; i < list.length - 1; i++) {
    for(let j = 0;  j < list.length - listAmount; j++) {
      if(list[i] > list[largest]) {
        largest = i;
      }
    }
    list.push(list[largest]);
    list.splice(list[largest], 1);
    listAmount++;
    largest = 0;
  }
  return list;
}

main();
