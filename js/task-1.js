"use strict";

// const arr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// for (let i = 0; i < arr.length; i += 1) {
// const namePosition = (i +1);
// const message = ( `${namePosition} - ${arr[i]}` )
//   console.log(message);
// }


function logItems(arr) {
  let message = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const namePosition = i + 1;
    message = `${namePosition} - ${arr[i]}`;
    console.log(message);
  }
  return message;
}

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
