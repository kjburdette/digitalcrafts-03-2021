if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const es6Renderer = require("express-es6-template-engine");
const initializedPassport = require("./passport-config");

initializedPassport(
    passport,
    (email) => users.find((user) =>user.email === email),
    (id) => users.find((user) => user.id === id)
);

// PORT
const port = 2028;
// this is mimicking a database
const users = [];

// middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("../public"));
app.use(express.json());
app.use(cors());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
}));
// app.use(flash());

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

// access our form information inside of our req
app.use(express.urlencoded({ extended: false }));

// Custom MIDDLEWARE
function checkAuthenticaded(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

function checkIfUserIsLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect("/");
    }
    next()
}


app.get("/", checkAuthenticaded, (req,res) =>{
    res.render("home");
})

app.get("/register", (req,res) =>{
    res.render("register");
})

app.post("/register", async (req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = {
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        }
        // sending the user to our "Database"
        users.push(user)
        // instance of you sending to a database model
        // User.Create()
        res.status(200).redirect("/login");
    } catch (error){
        res.status(401).redirect("/register");
    }
})

app.get("/login", (req,res) =>{
    res.render("login");
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
}))

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
})
