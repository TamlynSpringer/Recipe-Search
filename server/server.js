const fetch = require('node-fetch');
const express = require('express');
const app = express();

// console.log(fetch, 'hi');

app.get('/api', (req, res) => {
    res.json({'users': ['user1', 'user2', 'user3']});
})

app.get('/api/recipes', async (req, res) => {
  //without the recipe id the server crashes
  //careful that nodemon continuosly updates the server and will repeatedly doing api requests. only have 150!
  const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?${apiKey}&includeNutrition=false`;
  const fetchRes = await fetch(apiUrl);
  const json = await fetchRes.json();  
  console.log(json);
  // res.json(json);
});


app.listen(5000, () => console.log('Server listening on port 5000'));
//require node fetch 2.0
//or use import with node fetch 3.0
//create a get end point with the /recipes
