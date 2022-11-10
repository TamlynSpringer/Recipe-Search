import React from 'react';
import SearchInput from '../Components/SearchInput'

const Home = ({ input, onChangeInput, onSearchRecipes }) => {
  return (
    <>
      <SearchInput value={input} onChange={onChangeInput} onSubmit={onSearchRecipes} />
    </>
  )
}

export default Home;