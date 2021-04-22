CREATE DATABASE addressbook;

CREATE TABLE addresses (
    addresses_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);