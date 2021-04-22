const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to addressbook server")
})

// Creates Address
app.post("/add", async (req,res) => {
    try{
        const {description} = req.body;
        const newAddressInDB = await pool.query("INSERT INTO addresses (description) VALUES($1)", [description]);
        console.log(req.body);
        res.json(newAddressInDB);
    }catch (err){
        console.log(err.message)
    }
})

// View all addresses
app.get("/view", async (req,res) => {
    try{
        const viewAllAddresses = await pool.query("Select * from addresses");
        res.json(viewAllAddresses)
    }catch (err){
        console.log(err.message)
    }
})

// Views a single address
app.get("/view/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const viewAddress = await pool.query("Select * from addresses WHERE addresses_id = ($1)", [id]);
        console.log(req.body);
        res.json(viewAddress);
    }catch (err){
        console.log(err.message)
    }
})

// Update an address in addressbook
app.put("/update_address/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateAddressInDB = await pool.query("UPDATE addresses SET description = $1 WHERE addresses_id = $2", [description, id]);
    
        res.json("Updated the address!")

    }catch (err){
        console.error(err);
    }
})

// Deletes an address
app.delete("/delete_address/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const deleteAddressInDB = await pool.query("DELETE FROM addresses WHERE addresses_id = $1", [id]);
        res.json("Address was successfuly deleted!")

    }catch (err){
        console.error(err.message)
    }
})


app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
})