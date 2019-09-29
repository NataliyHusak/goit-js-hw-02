"use strict";

const YOU_NUMBER = 'Enter the number:';
const NOT_NUMBER = 'You have not entered a number, try again!';
let userInput;
let total = 0;
const userNumber = Number.parseFloat(userInput);
const numbers = [];

while (userInput !== null) {
  userInput = prompt(YOU_NUMBER, 0);
  let userNumber = +userInput;
  if (isNaN(userNumber) && userInput !== null) {
    alert(NOT_NUMBER);
    continue;
  } else {
    numbers.push(userNumber);
  }
}
for (const number of numbers) {
  total += number;
}
const message = `The sum is equal ${total}`;
console.log(message); 




// let input;
// const numbers = [];
// let total = 0;
// let number;

// input = prompt("Enter a number");

// if ((number = Number(input))) {
//   console.log(number);
// } else if (number == 0) {
//   console.log(input);
// } else if (number !== Number(input)) {
//   alert("Было введено не число, попробуйте еще раз");
// }
// numbers.push(input)
// console.log(numbers)
// total += numbers.push(input)
// console.log (total)

// let input;
// let numbers = [];
// let total = 0;
// let number;

// while (input !== null) {
//   input = prompt("Enter a number");
//   number = numbers.push(input);
//   total += Number(number);
//   console.log(total);
//   // console.log(number)
// }

// let input;
// let numbers = [];
// let total = 0;
