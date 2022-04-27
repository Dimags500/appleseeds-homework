// const storm = {
//   superPower: "Well, Storm also controls the weather, ",
// };
// function printSuperPower() {
//   console.log("my superpower is " + this.superPower);
// }

// const x = printSuperPower.bind(storm);

// console.log(x());

// -------------------------------------------

const storm = {
  superPower: "Well, Storm also controls the weather, ",
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSuperPower = printSuperPower;

storm.printSuperPower();
