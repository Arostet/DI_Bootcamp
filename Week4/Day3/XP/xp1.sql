SELECT name FROM language

SELECT film.title, film.description, language.name 
FROM film
INNER JOIN language
ON film.language_id = language.language_id

CREATE TABLE new_film(
	id serial PRIMARY KEY,
	name varchar (50) NOT NULL
)

INSERT INTO new_film (name)
VALUES 
('Rambo'),('Rocky'),('New One'),('The Afterway'),('Going to Pononocho')

CREATE TABLE customer_review (
	review_id serial PRIMARY KEY,
	film_id integer REFERENCES film(film_id) ON DELETE CASCADE,
	language_id integer REFERENCES language(language_id),
	title varchar (50) NOT NULL,
	score integer,
	review_txt varchar,
	last_update timestamp 
)

INSERT INTO customer_review(film_id, title, score, review_txt)
VALUES ('106', 'Commandments Shmamandments', 4, 'danjanajknaj j najnjandjanjnd jn jnjdnajkndjandkj nkjnakjndkjandjkanjkdna jknajkndjkanjdnajkfnajknfjk njk najkndjkan kn'),('110','Flash Dash', 6, 'jadbjiejijreijrioewhiwhnrnwkjnfwionwfoiwnbegjbngienvkiemvkmneoibnveonoienvioenve evijkenejnoivneoiv ejv einvienvionoein'),('112','Calendar is Right', 10, 'GREAT FILM YA!')


SELECT film.title, film.film_id, customer_review.title, customer_review.review_txt
FROM film
INNER JOIN customer_review
ON film.film_id = customer_review.film_id

DELETE FROM film where film_id = 106

ALTER TABLE film_actor
DROP CONSTRAINT film_actor_film_id_fkey

ALTER TABLE film_category
DROP CONSTRAINT film_category_film_id_fkey

ALTER TABLE inventory
DROP CONSTRAINT inventory_film_id_fkey

SELECT * FROM customer_review