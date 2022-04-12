const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const comparer = (arr1, arr2) => {
  const arr_to_return = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr_to_return.push(arr1[i]);
      }
    }
  }

  return arr_to_return;
};

let res = comparer(food, food1);

console.log(res);
