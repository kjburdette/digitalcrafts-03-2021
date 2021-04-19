const express = require("express");
const app = express();
const {readFile, read} = require("fs")
const port = 3002;

app.use(express.static("./public"));

app.get("/", (req,res) => {
    readFile("./index.html", "utf8", (err, html) =>{
        res.send(html);
    })
})

app.get("/store", (req,res) => {
    readFile("./store.html", "utf8", (err, html) =>{
        res.send(html);
    })
})

app.get("/contact", (req,res) => {
    readFile("./contact.html", "utf8", (err, html) =>{
        res.send(html);
    })
})

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
})