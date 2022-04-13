const doubleValues = [12, 2, 33, 4];

//-----------------------------------------------------------1

// const result1 = doubleValues.map((num) => num * 2);
// console.log(result1);

//-----------------------------------------------------------2

// const onlyEvenValues = (arr) => {
//   const even_arr = [];

//   arr.map((num) => {
//     num % 2 === 0 ? even_arr.push(num) : num;
//   });

//   return even_arr;
// };

// console.log(onlyEvenValues(doubleValues));

//-----------------------------------------------------------3

// const showFirstAndLast = (arr) =>
//   [arr.shift(), arr.pop()].map((num) => String(num));

// console.log(showFirstAndLast(doubleValues));

//-----------------------------------------------------------4

const str = "Rock will Win tHe World  You Know !";
let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };

function vowelCount(str) {
  const str_arr = Array.prototype.map.call(str, (eachLetter) => {
    return eachLetter.toLowerCase();
  });

  str_arr.forEach((char) => {
    if (obj[char] != undefined) {
      obj[char]++;
    }
  });
  return obj;
}

console.log(vowelCount(str));
