const mycountry = {
  country: "USSR",
  capital: "Moscow",
  language: "Rus",
  population: 200000000000,
  neighbours: ["all", "other", "countries"],

  describe: function () {
    console.log(
      this.country,
      this.capital,
      this.language,
      this.population,
      this.neighbours
    );
  },

  checkIsland: function () {
    this.neighbours.length == 0
      ? (this.isisland = true)
      : (this.isisland = false);
    console.log(this.isisland);
  },
};

// mycountry.describe();

const othercountry = Object.assign({}, mycountry);
othercountry.country = "Finland";
othercountry.capital = "Helsinki";
othercountry["population"] = 6;
othercountry["neighbours"] = ["swiss"];
othercountry.language = "finlands";

mycountry.checkIsland();
