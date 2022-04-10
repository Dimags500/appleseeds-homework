function colors(color) {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";

    case "blue":
    case "purple":
    case "brown":
      return "dark color";

    default:
      return "Unknown color";
  }
}

const color1 = colors("pink");
const color2 = colors("purple");
const color3 = colors("rock");

console.log(color1);
console.log(color2);
console.log(color3);
