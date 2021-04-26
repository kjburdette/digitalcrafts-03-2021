const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");
const { readFile } = require("fs");
console.log(port);

// middelware
app.use(cors());
app.use(express.json());


// Home page
app.get("/", (req,res) => {
    const message = "Welcome to the home page"
    res.send(message)
})

// Store page
app.get("/store", (req,res) => {
    const message = "Welcome to the store page"
    res.send(message)
})

// About page
app.get("/about", (req,res) => {
    const message = "Welcome to the about page"
    res.send(message)
})

// Contact page
app.get("/contact", (req,res) => {
    const message = "Welcome to the contact page"
    res.send(message)
})

// Create a card
app.post("/create_card", async (req,res) => {
    try{
        const {name, mana_cost, rarity, card_type} = req.body;
        const newCardInDB = await pool.query("INSERT INTO cards (name, mana_cost, rarity, card_type) VALUES($1, $2, $3, $4)", [name, mana_cost, rarity, card_type]);
        console.log(req.body);
        res.json(newCardInDB);
    }catch (err){
        console.log(err.message);
    }
})

// Read card list
app.get("/view_cards", async (req,res) => {
    try{
        const readCardsFromDB = await pool.query("Select * from cards");
        res.json(readCardsFromDB);
    }catch (err){
        console.log(err.message);
    }
})

// Read a single card
app.get("/view_cards/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const readSingleCardsFromDB = await pool.query("Select * from cards WHERE card_id = ($1)", [id]);
        res.json(readSingleCardsFromDB);
    }catch (err){
        console.log(err.message);
    }
})

// Update card in list
app.put("/update_card/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {name, mana_cost, rarity, card_type} = req.body;
        const updateCardInDB = await pool.query("UPDATE cards SET name = ($1), mana_cost = ($2), rarity = ($3), card_type = ($4) WHERE card_id = ($5)", [name, mana_cost, rarity, card_type, id]);
        res.json("Card has been updated!");
    }catch (err){
        console.log(err.message);
    }
})

// Delete card from db
app.delete("/delete_card/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const deleteCardInDB = await pool.query("DELETE FROM cards WHERE card_id = $1", [id]);
        res.json("Card was successfuly deleted!")

    }catch (err){
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
})