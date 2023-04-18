import React from 'react';
import './RecipeCards.css';

const RecipeCards = ({ image, ingredients, source, title, url }) => {
  return (
    <article className='article-card'>
      <h2 className='article-heading'> {title} </h2>
      <img src={image} alt={title}></img>
      <div>
        <p>Author: {source} </p>
        <p>Ingredients: {ingredients.length} </p>
        <ul>
        {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
      <div className='btn-container'>
        <button className='btn'><a href={url} target="_blank" rel="noreferrer">Make</a></button>
      </div>
    </article>
  )
}

export default RecipeCards;