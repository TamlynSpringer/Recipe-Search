// Search input with the search params being the keyword that will be used in the api fetch in express
import React from "react";
// import './Search.css';

const SearchInput = ({ input, onSearchRecipes, onChangeInput }) => {
  return (
    <section>
      <form onSubmit={onSearchRecipes}>
        <input 
        value={input}
        placeholder='Search by keyword...'
        onChange={onChangeInput} />
        <button type="submit">Search</button>
        
      </form>
  </section>
  )
};

export default SearchInput;

// onChange={e => onChangeInput(e)}
// onSubmit={e => onSearchRecipes(e)}