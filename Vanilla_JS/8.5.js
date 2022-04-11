let some_obj = {
  rock: "1",
  nick: "2",
  rika: "3",
};

let reverseValue = (obj) => {
  let obj_to_return = {};

  let len = Object.keys(obj);
  let value = Object.values(obj).reverse();

  for (let i = 0; i < len.length; i++) {
    obj_to_return[len[i]] = value[i];
  }

  return obj_to_return;
};

console.log(some_obj);

let res = reverseValue(some_obj);

console.log(res);
