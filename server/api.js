const fetch = require('node-fetch');
const express = require('express');
const app = express();
require('dotenv').config();

// console.log(fetch, 'hi');

app.get('/api', (req, res) => {
    res.json({'users': ['user1', 'user2', 'user3']});
})

app.get('/api/recipes/', async (req, res) => {
  console.log('request.params:', req.params);
  //without the recipe id or query param the server crashes
  //careful that nodemon continuosly updates the server and will repeatedly doing api requests. only have 150!
  // const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?${apiKey}&includeNutrition=false`;
  const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=261a492e3ec14356acb7df09dd9b4175&query=pasta';
  const fetchRes = await fetch(apiUrl);
  const json = await fetchRes.json();  
  // console.log(json);
  res.json(json);
});

module.exports = app;