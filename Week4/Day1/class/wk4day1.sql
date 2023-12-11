-- ALTER 

-- DELETE FROM products WHERE user_id=3

-- SELECT * FROM products

-- UPDATE products SET username = 'iPhone656' , description = 'jhajdnkjwndkjasnja' 
-- WHERE user_id = 1

-- SELECT * FROM products WHERE username like '%e'

-- SELECT * FROM products WHERE username like '%P%'


-- SELECT * FROM products WHERE username like 'i%'
-- SELECT * FROM products WHERE username in ('iPhone', 'iPhone15')

-- SELECT username FROM products WHERE price > 300

-- SELECT username FROM products WHERE user_id = 1


-- SELECT username || '  '|| description as namedesc FROM products

-- SELECT username FROM products

-- INSERT INTO products(username, price, description)
-- VALUES ('iPhone15', 500, 'kjahsdjkahsd'),
-- ('iPhone1544', 533300, 'kjahs23223djkahsd'),
-- ('iPhone1543', 50044, 'kjahserwwrwrwrdjkahsd')

-- CREATE TABLE products(
-- 	user_id serial PRIMARY KEY,
-- 	username varchar (255) UNIQUE NOT NULL,
-- 	price integer NOT NULL,
-- 	description varchar (1000)
-- )

-- CREATE TABLE accounts (
-- 	user_id serial PRIMARY KEY,
-- 	username varchar (50) UNIQUE NOT NULL,
-- 	password varchar (50) NOT NULL,
-- 	email varchar (255) UNIQUE NOT NULL,
-- 	created_on timestamp not null default now(),
-- 	last_login timestamp 
-- )


-- CREATE TABLE name_of_table(
-- 	id serial PRIMARY KEY,
-- 	email varchar(255) UNIQUE NOT NULL,
-- 	password varchar(1000),
-- 	created_date timestamp default now()
-- )
--UNIQUE
--NOT NULL
--PRIMARY KEY
--FOREIGN KEY

