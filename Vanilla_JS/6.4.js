const populations = [50, 100, 300, 10];

const percentageOfWorld = function (population) {
  const worldpopulation = 7900;
  let res = (population / worldpopulation) * 100;
  return res;
};

function populationPercentages(arr) {
  let percentages = [];

  for (let i = 0; i < arr.length; i++) {
    percentages.push(percentageOfWorld(arr[i]));
  }

  return percentages;
}

console.log(populationPercentages(populations));
