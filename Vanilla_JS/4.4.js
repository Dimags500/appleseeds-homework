//---------------------------------------ver 1
// const boom = (n) => {

//   for (let i = 1; i < n; i++) {

//     if (i % 7 == 0) {
//       if (i == 7) {
//         console.log("BOOM BOOM");
//         continue;
//       }

//       console.log("BOOM");
//     }
//     console.log(i);
//   }
// };

// boom(18);

//--------------------------------------- ver 2

// const boom2 = (n) => {
//   const numbers = [];

//   for (let i = 1; i <= n; i++) {

//     numbers[i] = i;

//     if (i % 7 == 0 && numbers[i].toString().includes(7)) {
//       console.log("BOOM BOOM ");
//     } else if (i % 7 == 0) {
//       console.log("BOOM");
//     } else {
//       console.log(i);
//     }
//   }
// };

// boom2(29);
