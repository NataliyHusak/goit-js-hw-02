"use strict";

// const pricePerWord = 'Proin sociis natoque et magnis parturient montes mus';
// const words = pricePerWord.split(" ").length
// const price = 10;
// const pricePer = words * price;
// console.log (pricePer);

function calculateEngravingPrice(message, pricePerWord) {
  const perWord = message.split(" ").length;
  const price = pricePerWord;

  return perWord * price;
}

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
