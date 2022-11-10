// Search input with the search params being the keyword that will be used in the api fetch in express
//
import React from "react";
// import './Search.css';

const SearchInput = ({ search }) => {
  return (
    <section>
      <form>
        <input 
        type="text" 
        placeholder='Search by keyword...'
        onKeyDown={search} />
        
      </form>
  </section>
  )
}

export default SearchInput;

// <button type="submit" onClick={e => handleClick(e)}>Search</button>