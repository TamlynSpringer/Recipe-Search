import { useNavigate, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Recipes from './Pages/Recipes.js';
import Recipe from './Pages/Recipe.js';
import { useEffect, useState } from 'react';
import { fetchRecipes } from './fetchRecipes.js'

const App = () => {

  const [input, setInput] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  // const [recipeData, setRecipeData] = useState([{}]);
  const navigate = useNavigate();
  
  const onSearchRecipes = async (e) => {
    // if (e.key === 'Enter') {
      e.preventDefault();
      const recipeResults = await fetchRecipes({ input });
      console.log('recipe results:', recipeResults);
      setRecipeData(recipeResults);
      navigate(`/recipes?${e.target.value}`)
    // }
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  }

  // useEffect(() => {
  // }, [input]);

  console.log('recipe data', recipeData);
  console.log('search input', input);

  return (
    <>
      <Header className='app__header' />
      
      <main className='app__main'>
      <Routes>
        <Route path='/' element={<Home value={input} onChange={onChangeInput} onSubmit={onSearchRecipes} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/recipes' element={<Recipes recipeData={recipeData} />}></Route>
        <Route path='/recipe' element={<Recipe />}></Route>
      </Routes>
      </main>
      
      <Footer />
    </>
  )
}

export default App;