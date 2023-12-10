-- CREATE TABLE customers(
-- 	user_id serial PRIMARY KEY,
-- 	user_name_first varchar (50) UNIQUE NOT NULL,
-- 	user_name_last varchar (50) UNIQUE NOT NULL
-- )

-- CREATE TABLE items (
-- 	id_num serial PRIMARY KEY,
-- 	item_name varchar (50) UNIQUE NOT NULL,
-- 	price integer NOT NULL
-- )

-- INSERT INTO items(item_name, price)
-- VALUES ( 'Small desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80)

-- ALTER TABLE customers
-- DROP CONSTRAINT customers_user_name_first_key;

-- ALTER TABLE customers
-- DROP CONSTRAINT customers_user_name_last_key;
-- INSERT INTO customers(user_name_first, user_name_last)
-- VALUES ( 'Gref', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor','Green'),
-- ('Melanie', 'Johnson')


-- SELECT * FROM items
-- SELECT * FROM items WHERE price > 80
-- SELECT * FROM items WHERE price <= 300
-- SELECT * FROM customers WHERE user_name_last = 'Smith'
-- SELECT * FROM customers WHERE user_name_last = 'Jones'
SELECT * FROM customers WHERE user_name_first != 'Scott'