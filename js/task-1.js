"use strict";



function logItems(arr) {
  let message;
  for (let i = 0; i < arr.length; i += 1) {
    message = `${i + 1} - ${arr[i]} \n`;
    console.log(message);
  }
}

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
