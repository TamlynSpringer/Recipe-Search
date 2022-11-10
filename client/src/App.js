import { useNavigate } from "react-router-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { useEffect, useState } from 'react';
import RecipeList from './Components/RecipeList';

const App = () => {

  const [input, setInput] = useState('pumpkin');
  const [recipeData, setRecipeData] = useState([{}]);
  console.log(recipeData);
  // const navigate = useNavigate();
  
  const onSearchRecipes = (e) => {
    e.preventDefault();
   
  };

  const getRecipes = async () => {
    const response = await fetch(`./api/recipes/${input}`);
    const data = await response.json();
    console.log('data:', data.hits);
    setRecipeData(data.hits)
  };

  useEffect(() => {
    getRecipes()
  }, [input]);
  
  const onChangeInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <Header className='app__header' />
      <section>
        <form onSubmit={onSearchRecipes}>
          <input 
          value={input}
          onChange={onChangeInput}
          placeholder='Search by keyword...' />
          <button type="submit">Search</button>
        </form>
      </section>
      <section>
      {(typeof recipeData === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          recipeData.map((recipe) => (
            <RecipeList 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            />
           
          ))
        )}
      </section>
      <Footer />
    </>
  )
}

export default App;
/* <article>
          <h2>{recipeData.recipe.label}</h2>
          <img src={recipeData.recipe.image} alt={recipeData.recipe.label} />
        </article> */
// {JSON.stringify(recipe)}
// .then(response => {
//   if (!response.ok) {
//     throw new Error('HTTP status ' + response.status);
//   }
//   return response.json()
// })
// .catch((err) => {
//   console.log(err)
// });

/* <main className='app__main'>
      <Routes>
        {<Route path='/' element={<Home value={input} onChange={onChangeInput} onSubmit={onSearchRecipes} />}></Route>}
        <Route path='/about' element={<About />}></Route>
        <Route path='/recipes' element={<Recipes recipeData={recipeData} />}></Route>
        <Route path='/recipe' element={<Recipe />}></Route>
      </Routes>
      </main> */

      // import Home from './Pages/Home.js';
      // import About from './Pages/About.js';
      // import Recipes from './Pages/Recipes.js';
      // import Recipe from './Pages/Recipe.js';
      // import SearchInput from "./Components/SearchInput.js";
// import { fetchRecipes } from './fetchRecipes.js'


    // if (e.key === 'Enter') {
         // const recipeResults = await fetchRecipes({ input });
      // console.log('recipe results:', recipeResults);
      // setRecipeData(recipeResults);
    // }

    // if (input && typeof input === 'string') {
    //   fetch(`./api/recipes/${input}`)
    //     .then((response) => console.log(response.json()))
    //     .then(data => {
    //       console.log('data results: ', data);
    //       setRecipeData(data.results);
    //   })
    // }
    // navigate(`/recipes/${input}`);