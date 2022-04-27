function arr() {}

let arr2 = new arr();

arr.prototype.find = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return arr[i];
    }
  }
};
console.log(arr2.find([12, 2, 3, 5, 7, 2, 9, 2], 2));

arr.prototype.filter = function (arr, condition, value) {
  let res = [];

  if (condition == "==") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == value) {
        res.push(arr[i]);
      }
    }
  }

  if (condition == "!=") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != value) {
        res.push(arr[i]);
      }
    }
  }

  if (condition == ">") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > value) {
        res.push(arr[i]);
      }
    }
  }

  if (condition == "<") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < value) {
        res.push(arr[i]);
      }
    }
  }

  return res;
};

console.log(arr2.filter([12, 2, 3, 5, 7, 2, 9, 2], ">", 2));
