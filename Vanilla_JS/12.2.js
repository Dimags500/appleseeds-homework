const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// ----------------------------------------------  1

const getCandy = (candyStore, id) =>
  candyStore.candies.find((item) => item.id == id);

// const id_result = getPrice(candyStore, "5hd7y");
// console.log(id_result);

//--------------------------------------------------2

// const getPrice = (candyStore, id) =>
//   candyStore.candies.find((item) => item.id == id).price;

// const price_result = getPrice(candyStore, "5hd7y");
// console.log(price_result);

//-------------------------------------------------- 3

// function addCandy(candyStore, id, name, price) {
//   candyStore.candies.push({ name: name, id: id, price: price || 1 });
// }

// addCandy(candyStore, "r3r3", "rock", 20);
// console.log(candyStore.candies);

//--------------------------------------------------- 4

// function buy(candyStore, id) {
//   const candy = getCandy(candyStore, id);

//   candy.amount -= 1;

//   candyStore.cashRegister += candy.price;
// }
// console.log(candyStore);

// buy(candyStore, "5hd7y");
// console.log(candyStore);
