const express = require("express");
const app = express();
app.use(express.json());

app.get("/numbers", (req, res) => {
  console.log(req.query);
  res.end(`success using  ${req.method} `);
});

app.get("/numbers/:id", (req, res) => {
  console.log(req.url);
  const { rock } = req.query;
  res.end(`success using  ${req.method} by id ${rock}`);
});

app.put("/numbers/:id", (req, res) => {
  res.end(`success using  ${req.method}`);
});

app.post("/numbers", (req, res) => {
  console.log(req.body);
  res.end(`success using  ${req.method}`);
});

app.delete("/numbers/:id", (req, res) => {
  res.end(`success using  ${req.method}`);
});

app.listen(5000, () => {
  console.log("hello server");
});
