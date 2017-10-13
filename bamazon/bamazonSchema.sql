DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INTEGER(200) NOT NULL,
    stock_quantity INTEGER(255),
    PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Iphone 8', 'Phones', 500, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Iphone 8 plus', 'Phones', 900, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Bose Headphones', 'Accessories', 350, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Beats Headphones', 'Accessories', 300, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('PS4 Controllet', 'Gaming', 80, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('XBox Controller', 'Gaming', 80, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Schledge Front Door Lock', 'House', 170, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Philips Hue Light Bulbs', 'House', 100, 100);