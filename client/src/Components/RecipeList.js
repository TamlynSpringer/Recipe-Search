// Rendering on the recipe card
import React from 'react';

const RecipeList = ({ title, image, ingredients, source, url }) => {
  return (
    <article>
      <h2> {title} </h2>
      <img src={image} alt={title}></img>
      <div>
        <p>Author: {source} </p>
        <p>Ingredients: {ingredients.length} </p>
      </div>
      <div>
        <button><a href={url}>Make</a></button>
      </div>
    </article>
  )
}

export default RecipeList;