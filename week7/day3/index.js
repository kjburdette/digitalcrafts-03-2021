const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");
console.log(port);

// middelware
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to node server")
})

// routes taht we define for our ndoe server

// CRUD

// create todo
app.post("/todo", async (req,res) => {
    try {
        const {description} = req.body;
        const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
        console.log(req.body);
        res.json(newTodoInDB);
    } catch (err) {
        console.log(err.message)
    }
})

// read the todo list

app.get("/read_todos", async (req,res) => {
    try {
       const readTodosFromDB = await pool.query("Select * from todo");
       res.json(readTodosFromDB)
    } catch (err) {
        console.log(err.message)
    }
})

// read a single todo
app.get("/read_todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
       const readSingleTodoFromDB = await pool.query("Select * from todo WHERE todo_id = ($1)", [id]);
       res.json(readSingleTodoFromDB)
    } catch (err) {
        console.log(err.message)
    }
})

// update the todo item on todolist

// delete the todo


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})