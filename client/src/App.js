import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import uuid from 'react-uuid';
import './App.css'
import RecipeCards from './Components/RecipeCards';

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pumpkin');
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    if (query && typeof query === 'string') {
      const response = await axios.get(`http://localhost:5000/api/recipes/${query}`);
      setRecipeData(response.data)
    }
  };
  
  useEffect(() => {
    if(query) {
      getRecipes(query);
    }
    setLoading(false)
  }, [query]);


  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <>
      <header className='header__container'>
        <nav className="header">
          <div className="logo">
            <h1>Recipe Search</h1>
          </div>
          <div className="link_search__container">
            <div className="search-container">
            <form onSubmit={getSearch} className='' >
              <input
              className='input__query'
              type='text'
              value={search}
              onChange={updateSearch}
              />
              <button
              className='btn__submit'
              type='submit'
              >
                Search
              </button>
            </form>
            </div>
            <div className="links-container">
              <ul className="menu">
                <li>
                  <Link className="links" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
     
      <main>
        {(loading) ? (
          <p>Loading...</p>
        ) : (
          recipeData?.map((recipe) => (
            <RecipeCards
              key={uuid()}
              title={recipe?.recipe.label}
              image={recipe?.recipe.image}
              ingredients={recipe?.recipe.ingredients}
              source={recipe?.recipe.source}
              url={recipe?.recipe.url}
            />
          ))
        )}
      </main>
    </>
  )
};

export default App;