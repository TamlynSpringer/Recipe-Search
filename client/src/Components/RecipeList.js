// Rendering on the recipe card
import React from 'react';
import './RecipeList.css'

const RecipeList = ({ title, image, ingredients, source, url }) => {
  return (
    <article className='article-card'>
      <h2 className='article-heading'> {title} </h2>
      <img src={image} alt={title}></img>
      <div>
        <p>Author: {source} </p>
        <p>Ingredients: {ingredients.length} </p>
      </div>
      <div className='btn-container'>
        <button className='btn'><a href={url} target="_blank" rel="noreferrer">Make</a></button>
      </div>
    </article>
  )
}

export default RecipeList;