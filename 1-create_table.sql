-- *Imagine you're designing a database to manage a bookstore. 
-- /* Create a table named "Books" with attributes for:
-- - book_id, 
-- - title, 
-- - author, 
-- - genre, 
-- - published_year, 
-- - isbn, 
-- - price, 
-- - rating, 
-- - stock_count.*/

CREATE TABLE Books (
    book_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title TEXT,
    author TEXT,
    genre TEXT,
    published_year INTEGER,
    isbn INTEGER,
    price FLOAT,
    rating TEXT,
    stock_count INTEGER
)
