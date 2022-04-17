const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());
console.log(foods.sort().reverse());

//----------------------------------------------- b

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

console.log("---------------------------  b");

console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b)));
console.log(foodsWithUpperCase.sort((a, b) => b.localeCompare(a)));

//----------------------------------------------- c

console.log("---------------------------   c");

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const result = words.sort((a, b) => b.length - a.length);
console.log(result);
