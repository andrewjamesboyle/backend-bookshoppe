-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books_authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released INT NOT NULL
);

INSERT INTO books (title, released) VALUES
('I Will Teach You To Be Rich', 2011),
('Siddhartha', 1974),
('Discipline Equals Freedom', 2014)
;

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    dob INT,
    pob VARCHAR
);

INSERT INTO authors (name, dob, pob) VALUES
('J.R. Tolkien', 1909, 'Hogwarts'),
('Harry Potter', 1989, 'England'),
('Benny the Dog', 2011, 'Los Angeles')
;


CREATE TABLE books_authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_id BIGINT,
    author_id BIGINT,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books_authors (book_id, author_id) VALUES
(1, 2),
(2, 3),
(3, 1)
;