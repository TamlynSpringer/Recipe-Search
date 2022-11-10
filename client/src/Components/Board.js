import React from 'react';

const Board = ({ recipeData }) => {
  
  return (
    <div>
      <section>
      {(typeof recipeData.recipes === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        recipeData.recipes.map((recipe, i) => (
          <p key={i}>
            {recipe}
          </p>
        ))
      )}
    </section>
  </div>
  )
}

export default Board;
