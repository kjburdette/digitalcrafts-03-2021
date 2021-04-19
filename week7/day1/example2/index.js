const expresss = require("express");
const app = expresss();
const {readFile, read} = require("fs")

const port = 3001;

// middleware
// app.use(express.json())

// routes
// 1 Default page aka /
// 2 home page 
// 3 abouut page
// 4 FAQ
// 5 messages



app.get("/", (req,res) => {
    const message = "Welcome to my page";
    res.send(message);
})

app.get("/home", (req,res) => {
    const message = "Welcome to my home"
    res.send(message);
})

app.get("/about", (req,res) => {
    const message = "Welcome to my about"
    readFile("./about.html", "utf8", (err,html) => {
        res.send(html)
    })
    // res.send(message)
    })


app.get("/faq", (req,res) => {
    const message = "Welcome to my FAQ"
    readFile("./faq.html", "utf8", (err,html) => {
        res.send(html)
    })
    // res.send(message);
})

app.post("/messages", (req,res) => {
    const message = "Post a message"
    res.send(message);
})

app.get("*", (req,res) => {
    const message = "uh oh, this page is not real";
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    })
})


app.listen(port, () => {
    console.log (`Youre server is being hosted on localhost:${port}`)
})