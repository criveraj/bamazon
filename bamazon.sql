CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  prod_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Acoustic Guitar", 415, 10);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Violin", 1900, 10);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Flute", 129, 15);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Piano", 3499, 3);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Ukulele", 54, 13);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Saxophone", 249, 7);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Cello", 2975, 8);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Trumpet", 119.99, 8);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Electric Guitar", 399.99, 10);
INSERT INTO products (prod_name, price, quantity)
VALUES ("Bass Guitar", 1199.99, 6);

SELECT * FROM products;