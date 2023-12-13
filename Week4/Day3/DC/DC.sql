CREATE TABLE customer (
	id serial PRIMARY KEY,
	first_name varchar (50) NOT NULL,
	last_name varchar (50) NOT NULL
)

CREATE TABLE customer_profile (
	id serial PRIMARY KEY,
	customer_id integer NOT NULL,
	CONSTRAINT fk_product
		FOREIGN KEY (customer_id)
			REFERENCES customer(id),
	isLoggedIn bool DEFAULT false 
)

INSERT INTO customer (first_name, last_name)
VALUES ('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

INSERT INTO customer_profile(customer_id, isLoggedIn)
VALUES (1, True), (2, False)

SELECT customer.first_name || ' ' || customer.last_name, customer_profile.isLoggedIn
FROM customer
INNER JOIN customer_profile
ON customer.id = customer_profile.customer_id
WHERE isLoggedIn = True

SELECT customer.first_name, customer_profile.isLoggedIn
FROM customer
LEFT JOIN customer_profile
ON customer.id = customer_profile.customer_id

SELECT customer.first_name || ' ' || customer.last_name, customer_profile.isLoggedIn
FROM customer
INNER JOIN customer_profile
ON customer.id = customer_profile.customer_id
WHERE isLoggedIn = False

