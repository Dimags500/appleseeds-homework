const arr = ["boo", "doooo", "hoo", "ro"];

const func = (arr) => {
  const res = [];

  let i = 0;
  while (i < arr.length) {
    res.push(arr[i]);
    i++;
  }
  return res;
};

console.log(func(arr));

// for loop simpler & more organized
