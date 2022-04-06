const result = (n) => {
  if (n >= 0 && n <= 64) {
    return "F";
  }
  if (n >= 65 && n <= 69) {
    return "D";
  }
  if (n >= 70 && n <= 79) {
    return "C";
  }
  if (n >= 80 && n <= 89) {
    return "B";
  }
  if (n >= 90 && n <= 100) {
    return "A";
  }
};

console.log(result(100));
console.log(result(88));
console.log(result(73));
console.log(result(65));
console.log(result(0));
