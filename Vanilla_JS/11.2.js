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

// const mixed_arr = [12, "nick", 2, "long", 33, 4, "rock"];

// const showFirstAndLast = (arr) => {
//   const filtred = arr.filter((i) => typeof i === "string");

//   return [filtred.shift(), filtred.pop()];
// };

// console.log(showFirstAndLast(mixed_arr));

//-----------------------------------------------------------4

// const str = "Rock will Win tHe World  You Know !";
// let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// function vowelCount(str) {
//   const str_arr = Array.prototype.map.call(str, (eachLetter) => {
//     return eachLetter.toLowerCase();
//   });

//   str_arr.forEach((char) => {
//     if (obj[char] != undefined) {
//       obj[char]++;
//     }
//   });
//   return obj;
// }

// console.log(vowelCount(str));

//-----------------------------------------------------------5

// const capitalize = (str) => str.toUpperCase();
// console.log(capitalize("Rock will Win"));

//-----------------------------------------------------------6

// function pp4(str) {
//   let nums_arr = str.split("").map((x) => x.charCodeAt(x) + 1);
//   let new_str = nums_arr
//     .map((x) => String.fromCodePoint(x))
//     .join()
//     .replaceAll(",", "");

//   return new_str;
// }

// let str = "abcd";
// console.log("Started str :" + str);
// console.log("Resualt :" + pp4(str));

//-----------------------------------------------------------7

// capitalize function from section 6

// const swapCase = (str) => capitalize(str);
// console.log(swapCase("Tiktak"));
