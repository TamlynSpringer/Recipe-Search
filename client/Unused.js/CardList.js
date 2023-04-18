import { useEffect, useState } from "react";
// import './CardList.css';
// import Card from "./Card";

const retrieveData = async (params) => {
  // const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=VuZcp_-aJVs8boOKxDfB7l4toXLboZFWW7jPl2Abbpk`);
  const response = await fetch(`https://api.spoonacular.com/recipes/${params}/information?apiKey=261a492e3ec14356acb7df09dd9b4175&includeNutrition=false`);
  const data = await response.json();
  return data;
};

const CardList = ({params}) => {
  const [recipes, setRecipes] = useState();
  
  useEffect(() => {
    retrieveData(params).then((data) => {
      setRecipes(data.results)
    });
  }, [query]);
  
  return (
    <section className="card__list__container">
      {recipes? recipes.map((el, i)=> {
        return <div>Hi</div>
        // return <Card regular = {el.urls.regular} key={i} description={el.description} author={el.user.name} alt={el.alt_description} />
      }): ''}
    </section>
  )
}

export default CardList