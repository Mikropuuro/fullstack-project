const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
var cors = require("cors");
app.use(cors());

var config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

const port = process.env.PORT || 8080;

const db = [{ name: "tiina" }, { name: "jack" }];

var pool = mysql.createPool(config);
app.get("/locations", (req, res) => {
  pool.query("SELECT * from locations", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

app.get("/", (req, res) => {
  res.send(db);
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
