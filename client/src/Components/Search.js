// Search input with the search params being the keyword that will be used in the api fetch in express
//
import React from "react";
// import './Search.css';

const Search = ({handleClick, handleQuery, searchvalue }) => {
  return (
    <section>
      <form>
        <input type="text" placeholder='Search by keyword...' ref={handleQuery} onChange={e => searchvalue(e.target.value)}/>
        <button type="submit" onClick={e => handleClick(e)}>Search</button>
      </form>
  </section>
  )
}

export default Search;
