/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
const welcome1 = () => {
  return "Welcome to Appleseeds Bootcamp!";
};
const welcome2 = () => "Welcome to Appleseeds Bootcamp!";

const power1 = (a) => Math.pow(a, 2);
const power2 = (a) => {
  return Math.pow(a, 2);
};

// From function expressions to IIFE functions.

(function squareRoot(a) {
  console.log(Math.sqrt(a));
  return Math.sqrt(a);
})(10);

(function randomNumbers(a, b) {
  let res = Math.random() * (a - b) + b;
  console.log(res);
  return res;
})(12, 2);
