function areaCalc(radius) {
  return Math.PI * (radius * radius);
}

let area = areaCalc(92);

// NOT SHURE ABOUT THE QUESTION
let rounded1 = Math.round(area);
let rounded2 = area.toFixed(2);

console.log(rounded1);
console.log(rounded2);
