// Rendering on the recipe card
import React from 'react'

const RecipeList = ({ title, image }) => {
  return (
    <article>
      <h2> {title} </h2>
      <img src={image} alt={title}></img>
    </article>
  )
}

export default RecipeList;