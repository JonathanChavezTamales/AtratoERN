const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const port = process.env.PORT || 4000;

//DB Config
let connection = mysql.createConnection({
  host: "localhost",
  user: "atrato",
  password: process.env.DB_PASSWORD,
  database: "atratoDB"
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("<< DB_CONNECTED");
  }
});

//Middleware
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "ok"
  });
});

//Main app endpoint
app.post("/users", (req, res, next) => {
  //Fields are escaped to handle SQL injection
  let firstName = connection.escape(req.body.firstName);
  let lastName = connection.escape(req.body.lastName);
  let email = connection.escape(req.body.email);
  let age = connection.escape(req.body.age);
  let monthlyEarnings = connection.escape(req.body.monthlyEarnings);
  let isMarried = connection.escape(req.body.isMarried);

  let query = `INSERT INTO clients(firstName, lastName, email, age, monthlyEarnings, isMarried)\
        VALUES (${firstName}, ${lastName}, ${email}, ${age}, ${monthlyEarnings}, ${isMarried})`;

  //Queries, if successful then returns the data created
  connection.query(query, err => {
    if (err) {
      res.status(500).json({
        message: err
      });
    } else {
      res.status(201).json({
        firstName,
        lastName,
        email,
        age,
        monthlyEarnings,
        isMarried
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
