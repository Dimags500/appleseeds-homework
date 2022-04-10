const countryToLiveIn = (language, isIsland, country, population) => {
  //isIsland boolean
  //population number
  //country  string
  //language string

  const check = language === "English" && population < 50 && !isIsland;

  if (check) console.log(" You should live in " + country);
  else console.log(country + " does not meet your criteria");
};

countryToLiveIn("English", false, "Germany", 44);
