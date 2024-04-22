-- There's been a price reduction for "War and Peace" and one copy has been sold. Update the price and stock count for this book.

UPDATE  Books
SET price = '$12.99'
WHERE title = 'War and Peace'

UPDATE  Books
SET stock_count = 2
WHERE title = 'War and Peace'
 