const express = require("express")
const app = express()
const port = 3001

app.get("/", (req,res) => {
    const message = "Hello my first node server!";
    res.send(message);
})

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
})
