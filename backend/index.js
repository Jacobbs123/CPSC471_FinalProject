import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "database-1.c5oo6boiqbn0.us-east-2.rds.amazonaws.com",
  user: "cpsc471admin",
  password: "finalproject",
  database: "CPSC471_project",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

// Get data from sql server
app.get("/");
app.get("/supply", (req, res) => {
  const q = "SELECT * FROM product";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/supply", (req, res) => {
  const q =
    "INSERT INTO supply (`product_id`, `quantity`, `supplyType`, `intended_animal`) VALUES (?)";
  // const values = ["title from backend", "desc from backend", "cover pic from backend"];
  const values = [
    req.body.product_id,
    req.body.quantity,
    req.body.supplyType,
    req.body.intended_animal,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Supply has been created");
  });
});

app.post("/signup", (req, res) => {
    const q = 
        "INSERT INTO user ('user_id', 'email', 'password', 'Fname', 'Lname', 'is_admin') VALUES (?)";
    const values = [
        req.body.user_id,
        req.body.email,
        req.body.password,
        req.body.Fname,
        req.body.Lname,
        req.body.is_admin,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("User has been created");
    });
});

app.get("/login", (req, res) => {
    const q =
        "SELECT * FROM user WHERE email = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
