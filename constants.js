/**
 * Port number
 */
const PORT = 7000;

const BASE_URL = `/api/v1`;

const END_POINT = {
  book: {
    get: `${BASE_URL}/book`,
    getById : `${BASE_URL}/book/:id`,
    post: `${BASE_URL}/book`,
    put: `${BASE_URL}/book/:id`,
    delete: `${BASE_URL}/book/:id`,
  },
  author : {
    get: `${BASE_URL}/author`,
    getById : `${BASE_URL}/author/:id`,
    post: `${BASE_URL}/author`,
    put: `${BASE_URL}/author/:id`,
    delete: `${BASE_URL}/author/:id`,
  }
};

const QUERY = {
  book: {
    get: `SELECT * FROM Book`,
    getById: (bookId) => `SELECT * FROM Book WHERE id=${bookId}`,
    post: `INSERT INTO Book SET ?`,
    put: (name, price, bookId) =>
      `UPDATE Book SET name='${name}', price='${price}' WHERE id=${bookId}`,
    delete: (bookId) => `DELETE FROM Book WHERE id=${bookId}`,
  },
  author: {
    get: `SELECT Author.id, Author.name AS author_name, Author.age, Author.book_id, Book.name AS book_name, Book.price  FROM Author INNER JOIN Book ON Author.book_id = Book.id`,
    getById: (authorId) => `SELECT * FROM Author WHERE id=${authorId}`,
    post: `INSERT INTO Author SET ?`,
    put: (name, age, authorId, bookId) =>
      `UPDATE Author SET name='${name}', age='${age}', book_id='${bookId}' WHERE id=${authorId}`,
    delete: (authorId) => `DELETE FROM Author WHERE id=${authorId}`,
  },
};

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "Iamadmin@2000",
  database: "user",
};

const TABLE_NAME = {
  book : "Book",
}

module.exports = { PORT, END_POINT, QUERY, DB_CONFIG, TABLE_NAME };
