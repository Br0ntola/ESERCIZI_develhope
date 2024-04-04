-- You decide to remove a book with BookID = 101 from the Books table. Ensure this change is saved permanently.

BEGIN TRANSACTION;
DELETE FROM books WHERE book_ID = 101;
COMMIT