import express from "express";
import bodyParser from "body-parser";

console.log(bodyParser);

const app = express();
app.use(bodyParser.json());

let counter = 0;

app.get("/", (req, res) => {
  res.send(`${counter}`);
});

app.post("/inc", (req, res) => {
  console.log(123);
  res.send(`${counter++}`);
});

// app.post("/inc", (req, res) => {
//   console.log(12345);
//   res.json(req.body);
// });

app.post("/dec", (req, res) => {
  res.send(`${counter--}`);
});

app.post("/die", (req, res) => {
  res.send("killing the server");
  process.exit();
});
const port = 3030;

app.listen(port, () => {
  console.log("counter listening on http://localhost:" + port);
});
