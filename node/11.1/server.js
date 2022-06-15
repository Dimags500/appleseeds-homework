const express = require("express");
const app = express();
app.use(express.json());

let array = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.write(JSON.stringify(array));
  res.end();
});

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
  console.log(number);

  if (number !== undefined) {
    array.push(JSON.parse(number));
  }
  console.log("after :" + array);
  res.end(`success using  ${req.method}`);
});

app.put("/numbers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = array.indexOf(id);
  const { number } = req.body;
  if (index > -1) {
    array[index] = number;
  } else {
    res.end("fail");
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
    res.end("fail");
  }
  res.end(`success deleted  ${array}`);
});

app.listen(4000, () => {
  console.log("hello server");
});
