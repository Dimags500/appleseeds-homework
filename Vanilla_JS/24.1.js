// You are given a function, Square, that takes four parameters, a, b, c, d,
// denoting the length of the square edges.

// Using prototype properties, add a method to Square named isSquare that

// prints true if a Square object has equal edges and false if they are unequal.
// Here is the Square function:

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

let square1 = new Square(1, 1, 1, 1);
let square2 = new Square(1, 1, 1, 2);

Square.prototype.isSquare = function () {
  let arr = [this.a, this.b, this.c, this.d];

  return arr.every((item) => item == arr[0]);
};

console.log(square1.isSquare());
console.log(square2.isSquare());
