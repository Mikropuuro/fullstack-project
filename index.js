const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
var cors = require("cors");
app.use(cors());
const path = require("path");

var config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(path.join(__dirname, "frontend/build")));

const port = process.env.PORT || 5000;

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
