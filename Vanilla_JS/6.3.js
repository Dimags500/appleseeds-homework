const arr = ["boo", "doooo", "hoo", "ro"];

const func = (arr) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].length);
  }
  return res;
};

console.log(func(arr));
