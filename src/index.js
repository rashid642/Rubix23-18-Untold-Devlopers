const express = require("express");
const path = require("path");
const hbs = require("hbs");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const {
    checkAuthenticated,
    checkNotAuthenticated,
    checkIsRetailler,
    checkIsNGO
} = require("./utils/middleware");

const ngo = require("./routing/ngo.js");
const retailler = require("./routing/retailler.js")
const app = express();

const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectory));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connection = require("./utils/dbconnection")

let hostname = "127.0.0.1";
const port = 3000;

app.use(flash());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

const initializePassport = require("./utils/passportConfig");
initializePassport(passport, email => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM `users` WHERE `email` = '" + email + "'";
        connection.query(sql, (err, rows) => {
            resolve(rows[0]);
        })
    })
}, id => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM `users` WHERE `id` = " + id + "";
        connection.query(sql, (err, rows) => {
            resolve(rows[0]);
        })
    })
});

app.use(ngo);
app.use(retailler);

app.get("/", (req, res) => {
    console.log("req user ",req.user);
    let ngo = false, retailler = false;
    if(!req.user){
    }else if(req.user.status === "ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    res.render("index", {
        ngo,
        retailler
    })
})
app.get("/aboutus", (req, res) => {
    let ngo = false, retailler = false;
    if(!req.user){
    }else if(req.user.status === "ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    res.render("aboutus", {
        ngo,
        retailler
    })
})
app.get("/contactus", (req, res) => {
    let ngo = false, retailler = false;
    if(!req.user){
    }else if(req.user.status === "ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    res.render("contactus", {
        ngo,
        retailler
    })
})
app.get("/login",checkNotAuthenticated, (req, res)=>{
    res.render("login");
})
app.get("/signup",checkNotAuthenticated, (req, res)=>{
    res.render("signup");
})
app.post("/login",checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
}))
app.get("/logout", checkAuthenticated, (req, res) => {
    console.log('Log out done');
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
      });
})
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});


