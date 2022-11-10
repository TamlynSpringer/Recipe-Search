import { Routes, Route } from "react-router-dom";
import  Home from './Pages/Home.js';
import About from './Pages/About.js';
import Recipes from './Pages/Recipes.js';
import Recipe from './Pages/Recipe.js';

const PagesRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/recipes' element={<Recipes />}></Route>
      <Route path='/recipe' element={<Recipe />}></Route>
    </Routes>
  )
}

export default PagesRoute;