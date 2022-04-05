function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

let ussr = describeCountry("USSR", 300, "Moscow");
const israel = describeCountry("Israel", 8, "Karmiel");
let usa = describeCountry("USA", 2, "Panama");

console.log(ussr);
console.log(israel);
console.log(usa);
