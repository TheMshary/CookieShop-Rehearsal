import React from 'react'

// Styles
import { SearchBarStyled } from '../styles';

const SearchBar = (props) => {
  return (
    <div>
      <SearchBarStyled onChange={(event) => props.setQuery(event.target.value)} placeholder="Search for a cookie name..." />
    </div>
  )
}

export default SearchBar
