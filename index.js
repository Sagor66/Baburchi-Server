const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef is cooking");
});

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id)
  const singleChefRecipe = recipes.find(recipe => parseInt(recipe.id) === id)
  res.send(singleChefRecipe)
})



app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`);
});
