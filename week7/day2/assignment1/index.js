const express = require("express")
const app = express()
const {readFile, read} = require("fs")
const port = 3001

app.use(express.json())

app.get("/", (req,res) => {
    const message = "This is my home page"
    res.send(message)
})

app.get("/about", (req,res) => {
    const message = "This is my about page"
    res.send(message)
})

app.post("/team", (req,res) => {
    const {name,age} = req.body
    const message = `Our team member is ${name} and they are ${age}`
    res.send(message)
})

app.get("/faq", (req,res) => {
    const message = "This is my faq page"
    res.send(message)
})

app.get("*", (req,res) => {
    const message = "Error page not found"
    res.send(message)
})

app.listen(port, () =>{
    console.log(`Your server is being hosted on localhost:${port}`)
})