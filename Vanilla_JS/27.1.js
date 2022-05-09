function check(num) {
  return new Promise((res, reg) => {
    num > 10 ? res("is more then 10") : reg("it's less then 10 ");
  });
}

let x = check(20)
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.log("catch");
  });
