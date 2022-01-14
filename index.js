const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
var cors = require("cors");
app.use(cors());

/**
 * Environment variables for accessing the database
 */

var config = {
  database: process.env.database,
  host: process.env.host,
  password: process.env.password,
  user: process.env.user,
  connectionLimit: 10,
};

/**
 * This makes it so that the app uses the build folder
 */
app.use(express.static("frontend/build"));

const port = process.env.PORT || 8080;

/**
 * This app.get accesses the database and displays it on localhost/8080/words
 */

var pool = mysql.createPool(config);
app.get("/words", (req, res) => {
  pool.query("select * from words", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
