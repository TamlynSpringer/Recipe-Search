const fetch = require('node-fetch');
const express = require('express');
const app = express();
require('dotenv').config();

const api_id = process.env.APP_ID;
const api_key = process.env.APP_KEY;

app.get('/api', (req, res) => {
    res.json({'users': ['user1', 'user2', 'user3']});
})

app.get(`/api/recipes/:input`, async (req, res) => {
  const apiUrl = `https://api.edamam.com/search?q=${req.params.input}&app_id=${api_id}&app_key=${api_key}`;
  const fetchRes = await fetch(apiUrl);
  const json = await fetchRes.json();
  
  // console.log('fetch data: ', json.hits);
  res.json(json);
});

// const apiUrl = `https://api.edamam.com/search?q=pasta&app_id=009d11b2&app_key=4b4bdc49108bb1ef4304c89bccd54d0c`
// const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?${apiKey}&includeNutrition=false`;
// const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=261a492e3ec14356acb7df09dd9b4175&query=${req.params.input}`;
// const apiUrl = `https://api.edamam.com/search?q=${req.params.input}&app_id=${APP_ID}&app_key=${APP_KEY}`;
// app.get(`/api/recipes/:id`, async (req, res) => {
//   // const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?${apiKey}&includeNutrition=false`;
//   const apiUrl = `https://api.spoonacular.com/recipes/632003/information?apiKey=261a492e3ec14356acb7df09dd9b4175&includeNutrition=false`
//   console.log('request.params:', req.params);
// })

/*
  
  */

module.exports = app; 