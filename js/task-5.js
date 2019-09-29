"use strict";

// function checkForSpam(str) {
//   const stringToLower = str.toLowerCase();
//   const stringToCheck =
//     stringToLower.includes("spam") || stringToLower.includes("sale");
//   return stringToCheck;
// }

const checkForSpam = str =>
  str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
