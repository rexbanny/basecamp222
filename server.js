const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database("user.db");

db.run(`CREAT TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT)
    `);

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    function (err) {
      if (err) {
        return res.send("Error");
      }
      res.send("User registered!");
    }
  );
});

app.listen(5500, () => {
  console.log("Server running on http://localhost:5500");
});
