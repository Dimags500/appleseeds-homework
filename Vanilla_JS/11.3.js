const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
// -----------------------------------------------------1

// const names = data.map((x) => x.name);
// console.log(names);

// -----------------------------------------------------2

// const age_less_then_32 = data.filter((item) => {
//   let num = item.birthday.split("-");

//   return num[num.length - 1] < 1990 ? item : false;
// });

// console.log(age_less_then_32);

// -----------------------------------------------------3

// const meats_array = data.map((x) => x.favoriteFoods.meats);
// const fish_array = data.map((x) => x.favoriteFoods.fish);
// const food = meats_array.concat(fish_array);

// const food2 = [];
// for (item of food) {
//   for (inner_item of item) {
//     food2.push(inner_item);
//   }
// }

// const food_obj = {};

// food2.forEach((item) => {
//   if (food_obj[item] === undefined) {
//     food_obj[item] = 0;
//   }
//   if (food_obj[item] !== undefined) {
//     food_obj[item]++;
//   }
// });

// console.log(food_obj);
