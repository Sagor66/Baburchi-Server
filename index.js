const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef is cooking");
});



app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`);
});
