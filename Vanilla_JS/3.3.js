function percentageOfWorld1(population) {
  const worldpopulation = 7900;

  let res = (population / worldpopulation) * 100;

  return res;
}

const country1 = percentageOfWorld1(1000);
const country2 = percentageOfWorld1(1220);
const country3 = percentageOfWorld1(400);

console.log(Math.round(country1));
console.log(Math.floor(country2));
console.log(country3);

//-----------------------------------------------

const percentageOfWorld2 = function (population) {
  const worldpopulation = 7900;
  let res = (population / worldpopulation) * 100;
  return res;
};

const country4 = percentageOfWorld2(200);
const country5 = percentageOfWorld2(520);
const country6 = percentageOfWorld2(100);

console.log(country4);
console.log(country5);
console.log(country6);
