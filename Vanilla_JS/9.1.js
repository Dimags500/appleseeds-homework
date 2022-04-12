const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let arr_item of listOfNeighbours) {
  for (const item of arr_item) {
    console.log("Neighbour : " + item);
  }
}
