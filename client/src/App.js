import "./App.css";
import Footer from "./Components/Footer.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeList from "./Components/RecipeList";

const App = () => {
  const [input, setInput] = useState("Pumpkin");
  const [recipeData, setRecipeData] = useState([{}]);
  // const [search, setSearch] = useState("");
  console.log(recipeData);
  // const navigate = useNavigate();

  const onSearchRecipes = async (e) => {
    e.preventDefault();
    // if (input && typeof input === 'string') {
    //     fetch(`./api/recipes/${input}`)
    //       .then((response) => console.log(response.json()))
    //       .then(data => {
    //         console.log('data results: ', data.hits);
    //         setRecipeData(data.results.hits);
    //     })
    //   }
    // setInput(search);
    // setSearch("");
  };

  const getRecipes = async () => {
    const response = await fetch(`./api/recipes/${input}`);
    const data = await response.json();
    console.log("data:", data.hits);
    setRecipeData(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [input]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
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
              <form onSubmit={onSearchRecipes}>
                <input
                  className="input__query"
                  value={input}
                  onChange={onChangeInput}
                  placeholder="Search by keyword..."
                />
                <button className="btn__submit" type="submit">Search</button>
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
      <section className='section__recipes'>
      {(typeof recipeData === 'undefined') ? (
          <p className="load">Loading...</p>
        ) : (
          recipeData.map((recipe) => (
            <RecipeList 
            key={Date.now()}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            source={recipe.recipe.source}
            url={recipe.recipe.url}
            />
          ))
        )}
      </section>
      {/* <Footer className="app__footer" /> */}
    </>
  );
};

export default App;

/*   <section className='section__recipes'>
      {(typeof recipeData === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          recipeData.map((recipe) => (
            <RecipeList 
            key={Date.now()}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            source={recipe.recipe.source}
            time={recipe.recipe.totalTime}
            url={recipe.recipe.url}
            />
          ))
        )}
      </section>

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
