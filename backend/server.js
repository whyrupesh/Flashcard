const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());

const db = mysql.createConnection({
  host: "your_host",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

app.get("/api/cards", (req, res) => {
  db.query("SELECT * FROM cards", (err, rows) => {
    if (err) {
      res.status(500).send({ message: "Error fetching cards" });
    } else {
      res.send(rows);
    }
  });
});

app.listen(8081, () => {
  console.log("Server started on port 8081");
});
