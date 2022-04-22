const { expect } = require("@jest/globals");
const carMarket = require("./carAgency");

// test("test delete car", () => {
//   expect(carMarket.deleteCarOfCostumer("2RprZ1dbL", "WIh0U")).toBe([
//     {
//       name: "Spider",
//       year: 2012,
//       price: 81520,
//       carNumber: "RLS4q",
//       ownerId: "2RprZ1dbL",
//     },
//   ]);
// });

test("should first", () => {
  expect(carMarket.decrementOrIncrementCashOfCostumer("2RprZ1dbL", 0)).toBe(
    278542
  );
}); //278542
