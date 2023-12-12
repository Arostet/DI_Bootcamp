UPDATE film
SET language_id = 3
WHERE film_id = 45;

SELECT film.title, language.name
FROM film 
INNER JOIN language
ON film.language_id = language.language_id
WHERE film_id = 45

SELECT COUNT(rental_id)
FROM rental
WHERE return_date IS NULL

DROP TABLE customer_review

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.title, film.replacement_cost
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental
ON rental.inventory_id = inventory.inventory_id
WHERE return_date IS NULL
ORDER BY film.replacement_cost desc
LIMIT 30

SELECT film.title
FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' 
and actor.last_name = 'Monroe' 
and film.description LIKE '%sumo%'
--sorry, friend. No films with Penelope Monroe that are about a sumo wrestler exist.

SELECT title
FROM film
WHERE rating = 'R' 
and length < 61
and description ILIKE '%documentary%'
---'Crossing Divorce'

SELECT film.title, customer.first_name, payment.amount
FROM film
INNER JOIN inventory 
ON film.film_id = inventory.film_id
INNER JOIN customer
ON inventory.store_id = customer.store_id
INNER JOIN rental
ON rental.customer_id = customer.customer_id
INNER JOIN payment
ON rental.customer_id = payment.customer_id
WHERE customer.first_name = 'Matthew' 
and customer.last_name = 'Mahan' 
and payment.amount > 4
and rental.rental_date BETWEEN '2005-07-28' AND '2005-08-01'

SELECT film.title, customer.first_name, payment.amount
FROM film
INNER JOIN inventory 
ON film.film_id = inventory.film_id
INNER JOIN customer
ON inventory.store_id = customer.store_id
INNER JOIN rental
ON rental.customer_id = customer.customer_id
INNER JOIN payment
ON rental.customer_id = payment.customer_id
WHERE customer.first_name = 'Matthew' 
and customer.last_name = 'Mahan' 
and film.replacement_cost > 25
and film.title LIKE '%boat%'
   OR film.description LIKE '%boat%';
   