const express = require("express");
const cookieSession = require("cookie-session");
const app = express();
const port = 3000;
const passport = require("passport");
const cors = require('cors')
const passportSetup = require("./middleware/passport")
const authRoute = require("./routes/auth")
const mongoose = require("./models/db")
const bodyParser = require('body-parser');
const loginFormAuth = require("./controllers/Login&Registerformtauth")

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    resave: false,
    saveUninitialized: false
  }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// router location
app.use("/auth", authRoute)
app.use(loginFormAuth)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3000`)
);