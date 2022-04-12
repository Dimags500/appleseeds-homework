// function stepsShape(num) {
//   if (num < 0) return console.log("arg should be postive integer");
//   counter = 0;
//   for (let i = 0; i < num; i += 1) {
//     const array = new Array(num).fill(" ");
//     for (let j = 0; j < array.length; j += 1) {
//       array[j] = "#";
//       if (j >= counter) {
//         counter += 1;
//         break;
//       }
//     }
//     console.log(array.join().replaceAll(",", ""));
//   }
// }

// stepsShape(19);

function stepsShap(num) {
  if (num < 0) return console.log("arg should be postive integer");
  let str = "".padEnd(num);
  let counter = 0;
  for (let i = 0; i < num; i += 1) {
    const slice = str.slice(0, num - i);
    console.log(slice);
    str = "#" + slice;
    console.log(str);
  }
  console.log(str.length);
}

stepsShap(4);

console.log("####".slice(3));
