var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const itCanBeReaded = (books) => {
  let readable_books = books.filter((book) => book.readingStatus);
  return readable_books;
};

const readable_books = itCanBeReaded(library);
console.log(readable_books);
