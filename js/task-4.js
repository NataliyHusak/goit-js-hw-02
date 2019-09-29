"use stringict";

// function formatString(string) {
//   const stringLenght = string.length;
//   const maxLenght = 40;
//   let stringToShow;

//   // console.log(stringLenght);

//   if (stringLenght <= maxLenght) {
//     stringToShow = string;
//   } else {
//     const formatLenght = string.slice(0, 40);
//     const formatLenghtString = `${formatLenght}...`;

//     stringToShow = formatLenghtString;
//   }

//   return stringToShow;
// }

// не працює

const formatString = (string, value = 40) =>
string.length > 40 ? `${string.slice(0, value)}...` : string; 


// const formatString = string =>
//   string.length > 40 ? string.slice(0, 40) + '...' : string;

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
