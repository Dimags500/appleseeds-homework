function makeAllCaps(arr) {
  return arr.map((item) => {
    let cap = item[0].toUpperCase();
    let word = item.slice(1);
    return cap + word;
  });
}

function sortWords(arr) {
  return arr.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }

    return 0;
  });
}

let p1 = Promise.resolve(["atick", "cro", "riss", "zkij", "rrr"]);
let p2 = Promise.resolve(["atick", "cro", "riss", "zkij", 2, 3, "rrr"]);

p2.then(makeAllCaps)
  .then((res) => {
    let step2 = sortWords(res);
    console.log(step2);
  })
  .catch((err) => {
    console.log("error p2 | ", err);
  });

p1.then(makeAllCaps)
  .then((res) => {
    let step2 = sortWords(res);
    console.log(step2);
  })
  .catch();
