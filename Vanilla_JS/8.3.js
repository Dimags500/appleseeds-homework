let book1 = {
  name: "rock",
  author: "rick",
  year: 2000,
};

let book2 = {
  name: "dock",
  author: "nick",
  year: 2298,
};

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    if (book1.year > book2.year) {
      return book2;
    } else if (book1.year == book2.year) {
      return null;
    } else return book1;
  },

  setNewEdition: function (book) {
    book["latestEdition"] = 2022;

    return book;
  },

  setLanguage: function (book) {
    book.language = "Rus";
    return book;
  },

  setTranslation: function (book, language, translator) {
    book.translation = [language, translator];
    return book;
  },

  setPublisher: function (book, name, location) {
    book.publisher = [name, location];

    return book;
  },

  isSamePublisher: function (book1, book2) {
    if (
      book1.publisher[0] == book2.publisher[0] &&
      book1.publisher[1] == book2.publisher[1]
    ) {
      return true;
    } else {
      return false;
    }
  },
};

// let res = bookUtils.getFirstPublished(book1, book2);
// console.log(res);

// let res2 = bookUtils.setNewEdition(book1);
// console.log(res2);

// let res3 = bookUtils.setLanguage(book1);
// console.log(book1);

// let res4 = bookUtils.setTranslation(book1, "Heb", "Eng");
// console.log(res4);

let res5 = bookUtils.setPublisher(book1, "zikad", "vietnam");
let res6 = bookUtils.setPublisher(book2, "zikad", "vietnam");
let res7 = bookUtils.isSamePublisher(book1, book2);

console.log(res5);
console.log(res6);
console.log(res7);
