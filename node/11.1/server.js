const express = require("express");
const app = express();
app.use(express.json());

let array = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.write(JSON.stringify(array));
  res.end();
});

const notExist = (number) => {
  if (!array.includes(number)) {
    res.status(400);
    res.send("number not fund ");
  }
};

app.get("/numbers/:id", (req, res) => {
  const { id } = req.params;
  const index = array.indexOf(parseInt(id));

  if (index > -1) {
    res.write(JSON.stringify(array[index]));
    res.end();
  } else {
    res.end("no data");
  }
});

app.post("/numbers", (req, res) => {
  const { number } = req.body;
  let num = JSON.parse(number);

  const exist = array.includes(num);
  if (number !== undefined && !exist) {
    array.push(num);
    res.end(`success using  ${req.method}`);
  } else {
    res.status(400);
    res.send("number exist");
  }
});

app.put("/numbers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = array.indexOf(id);
  const { number } = req.body;
  if (index > -1) {
    array[index] = number;
  } else {
    res.status(400);
    res.send("number not fund ");
  }

  res.write(JSON.stringify(array));
  res.end("sucsses");
});

app.delete("/numbers/:id", (req, res) => {
  let id = parseInt(req.params.id);
  const index = array.indexOf(id);

  console.log(index);
  if (index > -1) {
    array = array.filter((item) => item !== id);
  } else {
    res.status(400);
    res.send("number not fund ");
  }
  res.end(`success deleted  ${array}`);
});

app.listen(4000, () => {
  console.log("hello server");
});
