import React from 'react'

// Styles
import { SearchBarStyled } from '../styles';

const SearchBar = ({ setQuery }) => {
  return (
    <div>
      <SearchBarStyled onChange={(event) => setQuery(event.target.value)} placeholder="Search for a cookie name..." />
    </div>
  )
}

export default SearchBar
