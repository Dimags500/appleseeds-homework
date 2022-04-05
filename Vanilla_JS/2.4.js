function findThemAll() {
  const date = new Date();

  const monthNameLong = date.toLocaleString("en-US", { month: "long" });
  const dayhNameLong = date.toLocaleString("en-US", { weekday: "long" });

  const year = date.getFullYear();
  const day = date.getDate();

  return ` Today is ${dayhNameLong} the ${day} of ${monthNameLong} , ${year}  `;
}

let nowIs = findThemAll();

console.log(nowIs);
