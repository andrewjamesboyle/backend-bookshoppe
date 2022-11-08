const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM books LEFT JOIN books_authors ON books.id = books_authors.book_id WHERE books.id = $1', [id]);
    return new Book(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((row) => new Book(row));
  }
}

module.exports = Book;

