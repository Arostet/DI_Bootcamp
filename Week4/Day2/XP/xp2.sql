SELECT * FROM customer

SELECT first_name || ' ' ||last_name 
AS full_name
FROM customer 

SELECT DISTINCT create_date 
FROM customer

SELECT first_name, last_name, customer_id, email
FROM customer
ORDER BY first_name desc

SELECT film_id, title, description, release_year,rental_rate
FROM film
ORDER BY rental_rate ASC

SELECT address, phone
FROM address
WHERE district = 'Texas'

SELECT * 
FROM film
WHERE film_id 
IN (15, 150)

SELECT film_id, title, description, length, rental_rate 
FROM film
WHERE title = 'The Big Lebowski'

SELECT film_id, title, description, length, rental_rate 
FROM film
WHERE title 
ILIKE 'Th%'

SELECT film_id, title, description, length, rental_rate 
FROM film
WHERE title 
ILIKE '%Lebowski%'

SELECT title
FROM film
ORDER BY replacement_cost ASC
LIMIT 10

SELECT title
FROM film
ORDER BY replacement_cost ASC
OFFSET 10 ROWS
FETCH NEXT 10 ROWS ONLY

SELECT customer.first_name, customer.last_name , payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC

SELECT film.film_id, film.title
FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory)

SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id
