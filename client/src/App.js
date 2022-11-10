import { useNavigate } from "react-router-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { useState } from 'react';

const App = () => {

  const [input, setInput] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  // const navigate = useNavigate();
  
  const onSearchRecipes = (e) => {
    e.preventDefault();
    if (input && typeof input === 'string') {
      fetch(`./api/recipes/${input}`)
        .then((response) => response.json())
        .then(data => {
          setRecipeData(data.results);
      })
    }
    // navigate(`/recipes/${input}`);
  };
  
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
          recipeData.map((recipe, i) => (
            <article key={i}  id={recipe.id}>
              <h1> {recipe.title} </h1>
              <img src={recipe.image} alt={recipe.title}></img>
            </article>
          ))
        )}
      </section>
      <Footer />
    </>
  )
}

export default App;

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