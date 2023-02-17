
>psql -U postgres  --how to start postgres

>create database yelp; --how to create database

>\c yelp --how to center database

-- >DROP TABLE restaurants CASCADE; --How to delete a table

>DROP TABLE restaurants1 CASCADE; --How to delete a table

>DROP TABLE restaurants2 CASCADE; --How to delete a table


>CREATE TABLE restaurants1 (  
  id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
  calories VARCHAR(50) NOT NULL
);


>CREATE TABLE restaurants2 (  
  id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
  calories VARCHAR(50) NOT NULL
);


>SELECT * FROM restaurants1;

>SELECT * FROM restaurants2;
------------------------------------------------------

>CREATE TABLE restaurants (  --How to add a table
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
  -- calories VARCHAR(50) NOT NULL,
  --price_range INT NOT NULL check(
    --price_range >= 1
    --AND price_range <= 5
  --)
);

>INSERT INTO restaurants(name, price_range) --How to insert a row via postgres
VALUES ('Iya Toyosi', 'Sagamu', 3);
-- INSERT INTO restaurants(name, calories, price_range)

>INSERT INTO restaurants2(name, calories) --How to insert a row via postgres
VALUES ('Burger2', '100');

---
Other table
-- CREATE TABLE reviews (
--   id BIGSERIAL NOT NULL PRIMARY KEY,
--   restaurant_id BIGINT REFERENCES restaurants(id) ON DELETE CASCADE,
--   name VARCHAR(50) NOT NULL,
--   review TEXT NOT NULL,
--   rating INT NOT NULL check(
--     rating >= 1
--     AND rating <= 5
--   )
-- );
