-- You're testing the database by removing a book with BookID = 103 but want to revert the change immediately after.

BEGIN TRANSACTION;
DELETE FROM books WHERE BookID = 103;
ROLLBACK
