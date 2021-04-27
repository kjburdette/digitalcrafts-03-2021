const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const pool = require("./db.js");
const { readFile } = require("fs");
const es6Renderer = require("express-es6-template-engine");

// middelware
app.use(cors());
app.use(express.json());
app.engine("html", es6Renderer);
app.set("views", "../template");
app.set("view engine", "html");

app.get("/", (req,res) => {
    res.render("home");
})

// create todo
app.post("/todo", async (req,res) => {
    const {description} = req.body;
    try {
        const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
        console.log(req.body);
        res.status(200).send("todo was sent");
    } catch (err) {
        console.log(err.message)
    }
})

// read the todo list
app.get("/read_todos", async (req,res) => {
    const todolist = await pool.query("Select * from todo")
    // console.log(todolist.rows)
    res.render("viewlist", {
        locals: {
            todos: todolist.rows,
        }
    })
});
        


// read a single todo
app.get("/read_todos/:id", async (req,res) => {
    try {
        const todolist = await pool.query("Select * from todo")
        const {id} = req.params;
       const readSingleTodoFromDB = await pool.query("Select * from todo WHERE todo_id = ($1)", [id]);
       res.render("todo", {
           locals: {
               todos: todolist.rows,
           }
       })
    } catch (err) {
        console.log(err.message)
    }
})

// update the todo item on todolist
app.put("/update_todos/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodoInDB = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    
        res.json("Updated the todos!")

    }catch (err){
        console.error(err);
    }
})

// delete the todo
app.delete("/delete_todo/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const deleteTodoInDB = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was successfuly deleted!")

    }catch (err){
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
})