const validation1 = (pass) => {
  if (pass.length > 7) console.log("Strong");
  else console.log("Weak");
};

const validation2 = (pass) =>
  pass.length > 7 ? console.log("Strong") : console.log("Weak");

const validation3 = (pass) => {
  pass.length > 7 && pass.length < 20
    ? console.log("Strong")
    : console.log("Weak");
};

// validation3("rock&roll");
// validation2("rock&roll");
// validation1("rock");

//-----------------------------------------------------------------------------
const advancedPass = (pass) => {
  pass.length > 7 && pass.search(/[A-Z]/) >= 0
    ? console.log("Super Strong")
    : pass.length > 7
    ? console.log("Strong")
    : console.log("Weak");
};

advancedPass("Aaaaaaaa");
advancedPass("rollaada");
advancedPass("ww");
