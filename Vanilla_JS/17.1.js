// ----------------------------------------   block 1

// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9); // 5
// var result = firstResult(2); // 5

// console.log(result);

// firstResult runs someFunction() and result is returned otherFunction()
// otherFunction() has closure member that store parrent values that ths function is thepends on

// ----------------------------------------   block 2

// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() {}
// }
// b2();
// console.log(a);

// in b2 function frist we put value 10 in var a , but after we overide to local funtion , so in run time we will get only inner function function
//  global var a will be 1 ;

// ----------------------------------------   block 3

// let i;
// for (i = 0; i < 3; i++) {
//  const log = () => {
//  console.log(i);
//  }
//  setTimeout(log, 100);
// }

//
