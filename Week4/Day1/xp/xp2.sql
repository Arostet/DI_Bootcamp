-- CREATE TABLE students (
-- 	id serial PRIMARY KEY,
-- 	last_name varchar (50) NOT NULL,
-- 	first_name varchar (50) NOT NULL,
-- 	birth_date date
-- )
-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Aron', 'Stettin', '1990-04-12')


-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Marc', 'Benichou', '1998-02-11'),
-- ('Yoan', 'Cohen', '2010-03-12'),
-- ('Lea', 'Benichou', '1987-07-27'),
-- ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson', '1980-10-03')

-- SELECT * FROM students 
-- SELECT first_name, last_name FROM students
-- SELECT first_name, last_name FROM students WHERE id = 2
-- SELECT first_name, last_name FROM students 
-- WHERE first_name ='Marc' and last_name ='Benichou'
-- SELECT first_name, last_name FROM students
-- WHERE first_name LIKE '%a%'
-- SELECT first_name, last_name FROM students
-- WHERE first_name ILIKE 'a%'
-- SELECT first_name, last_name FROM students
-- WHERE first_name LIKE '%a'
-- SELECT * FROM students 
-- WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) ='a';
-- SELECT first_name, last_name FROM students 
-- WHERE id = 1 or id = 3
SELECT * FROM students
WHERE birth_date >= '2000-01-01'