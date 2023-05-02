const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

const chefs = require('./data/chefs.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef is cooking");
});

app.get('/chefs', (req, res) => {
  res.send(chefs)
})




app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`);
});
