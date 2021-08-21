const express = require("express");
const foodSchema = require("../routes/foodRoutes");

const app = express();

app.get('/', async (req, res) => {
  try{
    const foods = await foodSchema.find({});
    res.send(foods);
  }catch(err){
    res.status(500).send(err);
  }
});

module.exports = app;
