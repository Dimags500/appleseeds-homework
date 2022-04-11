const book = {
  author: "rock",
  name: "Dreams of ...",
  year: 1991,
  pages: 2000,
  ganer: "fantacy",
  relised: true,
};

const func = (book) => {
  return ` The book ${book.name} was written by ${book["author"]} in the yaer ${book["year"]} `;
};

console.log(func(book));
