const arr = [1, 7, 3, 0, -5, 7, 3, 9];

const arrayLength = (arr) => {
  return arr.indexOf(9);
};

//----------------------------------------------------- 1

// for (let i = 0; i < arrayLength(arr); i++) {
//     console.log(arr[i]);
// }

//----------------------------------------------------  2

// const arraySum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arrayLength(arr); i++) {
//     sum += arr[i];
//   }

//   return sum;
// };

// const sum = arraySum(arr);
// console.log(sum);

//----------------------------------------------------- 3

const arrayMulti = (arr) => {
  let sum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }

  return sum;
};

const multi = arrayMulti(arr);
console.log(multi);
