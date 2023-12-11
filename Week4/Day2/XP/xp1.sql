SELECT id_num, item_name, price
FROM items
ORDER BY price ASC

SELECT id_num, item_name, price
FROM items
WHERE price >= 80
ORDER BY price desc

Select user_name_first, user_name_last 
FROM customers
ORDER BY user_name_first 
LIMIT 3

Select user_name_last 
FROM customers
ORDER BY user_name_last desc 

