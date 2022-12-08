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
    if (err) console.log(err);
    res.send(data);
  });
});

app.post("/supply", (req, res) => {
  const q =
    "INSERT INTO product (product_name, description, picture, price, quantity, supply_type, intended_animal) VALUES (?,?,?,?,?,?,?)";
  // const values = ["title from backend", "desc from backend", "cover pic from backend"];
  const values = [
    req.body.product_name,
    req.body.description,
    req.body.picture,
    req.body.price,
    req.body.quantity,
    req.body.supplyType,
    req.body.intended_animal,
  ];

  db.query(q, values, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/cart", (req, res) => {
    const q = "SELECT * FROM cart WHERE user_id = ?";
    const values = [req.query.user_id];
    db.query(q, values, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const q =
    "INSERT INTO user (email, password, Fname, Lname, shipping_address) VALUES (?,?,?,?,?)";
  const values = [
    req.body.email,
    req.body.password,
    req.body.Fname,
    req.body.Lname,
    req.body.shipping_address,
  ];

  db.query(q, values, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/login", (req, res) => {
  console.log(req.query);
  const q = "SELECT * FROM user WHERE email = ? AND password = ?";
  const values = [req.query.email, req.query.password];

  db.query(q, values, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
