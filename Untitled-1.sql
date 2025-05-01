
 CREATE TABLE business_stores (
 id int PRIMARY KEY,
 streetaddress varchar(100),
 city varchar(50),
 state varchar(50),
 hours varchar(100)
 );

CREATE TABLE workers (
 id int PRIMARY KEY,
 first_name varchar(50),
 last_name varchar(50),
 store int,
 position varchar(50),
 hiredate date,
 phone_number int
 );

CREATE TABLE customers (
 id int PRIMARY KEY,
 first_name varchar(50),
 last_name varchar(50),
 email varchar(200),
 total_purchase_amount int,
 total_number_purchases int
 );

 CREATE TABLE purchases (
 id int,
 cust_id int,
 purchase_date date,
 purchase_amount int
 );

ALTER TABLE purchases
ALTER COLUMN purchase_date TYPE timestamp;

ALTER TABLE purchases
ADD PRIMARY KEY (id);

 ALTER TABLE purchases
ADD CONSTRAINT customer_fk
FOREIGN KEY (cust_id)
 REFERENCES customers (id);

INSERT INTO 