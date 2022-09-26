import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "carly",
  password: "carly",
  database: "crud",
});

app.get("/", (req, res) => {
  res.json("this is the database");
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products;";
  db.query(query, (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

app.post("/products", (req, res) => {
  const query = "INSERT INTO products (`title`, `desc`, `image`, `price`) VALUES (?)";
  const VALUES = [
    req.body.title,
    req.body.desc,
    req.body.image,
    req.body.price,
  ];

  db.query(query, [VALUES], (err, result) => {
    if (err) return res.json(err);
    res.json("product has been created");
  });
});

app.delete("/products/:id", (req, res) => {
    const productId = req.params.id;
    const query = "DELETE FROM products WHERE id = ?";

    db.query(query, [productId], (err, result) => {
        if (err) return res.json(err);
        res.json("product has been deleted");
    });

})

app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const query = "UPDATE products SET `title` = ?, `desc` = ?, `price` = ?, `image` = ? WHERE id = ?";
  const VALUES = [
    req.body.title,
    req.body.desc,
    req.body.image,
    req.body.price,
  ];

  db.query(query, [...VALUES, productId], (err, result) => {
      if (err) return res.json(err);
      res.json("product has been Updated");
  });

})

app.listen(8800, () => {
  console.log("Listening on port 8800");
});
