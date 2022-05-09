const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

// in line 13 application try to call getStrength() function that dosen't exist in scope of whoIsStronger function
// but we do , can bind getStrength property , whoIsStronger will run hero.getStrength() and this will be hero boject this
console.log(whoIsStronger(hero.getStrength.bind(hero)));
