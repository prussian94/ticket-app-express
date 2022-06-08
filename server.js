const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const config = require("./config")

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "ticket-session",
    secret: config.COOKIE_SECRET_KEY, // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
require('./database-connection')

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ticket application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const authController = require('./app/controllers/auth');

app.use('/auth', authController);
