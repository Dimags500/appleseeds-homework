// function isString(str, callback) {
//   if (typeof str == "string") {
//     callback(str);
//   }
// }

// isString("rock", someFunc);

// function someFunc(str) {
//   console.log("Hello fom CallBack");
//   console.log(str);
// }

//----------------------------------------------------------------
// function firstWordUpperCase(str, callback) {
//   let words = str.split(" ");
//   words[0].toUpperCase();
//   let new_str = words.join();

//   callback(new_str);
// }

// firstWordUpperCase("Rock will win", someAction);

// function someAction(str) {
//   let new_str = str.replaceAll(",", "-");
//   console.log(new_str);
// }

//--------------------------------------------------------------

function rockCap(str, func) {
  func(str);
}

function someCallbackFunc(str) {
  console.log(str.toUpperCase());
}

rockCap("Super", someCallbackFunc);
