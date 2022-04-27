// You are given a function, Pokeman, that takes three parameters,
// pokemonName, pokemonType, an array of different pokemon attack methods,
// pokemonAttackList.

// 1. Create three instances of the Pokemon and save them in a variable.

// 2. Using prototype properties, add the following methods:

// •A method called callPokemon that will print the following: “I choose
// you, <pokemon name>

// •A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”

// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let pokemon1 = new Pokemon("poc1", "whater", ["no", "take", "rock"]);
let pokemon2 = new Pokemon("poc2", "fire", ["go", "swim", "do"]);
let pokemon3 = new Pokemon("poc3", "land", ["yes", "red", "green"]);

Pokemon.prototype.callPokemon = function () {
  console.log("I choose you " + this.name);
};

Pokemon.prototype.attac = function (num) {
  if (this.attackList[num]) {
    console.log(this.name + " attack " + this.attackList[num]);
  }
};

pokemon1.callPokemon();
pokemon1.attac(2);

pokemon2.callPokemon();
pokemon2.attac(2);
pokemon3.callPokemon();
pokemon3.attac(1);
