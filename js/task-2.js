"use strict";

const calculateEngravingPrice = (message, pricePerWord) =>
  message.split(" ").length * pricePerWord;

// function calculateEngravingPrice(message, pricePerWord) {
//   const perWord = message.split(" ").length;
//   const price = pricePerWord;

//   return perWord * price;
// }

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100
