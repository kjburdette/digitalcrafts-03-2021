CREATE DATABASE mtg;

CREATE TABLE cards (
    card_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    mana_cost INT,
    rarity VARCHAR(15),
    card_type VARCHAR(20)

);