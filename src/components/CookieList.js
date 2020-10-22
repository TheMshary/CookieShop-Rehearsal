import React, { useState } from "react";

// Data
import cookies from "../cookies";

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from './CookieItem';
import SearchBar from './SearchBar';

const CookieList = () => {
  const [query, setQuery] = useState("");
  const filteredCookies = cookies.filter(cookie => cookie.name.toLowerCase().includes(query.toLowerCase()))
  const cookieList = filteredCookies.map(cookie => <CookieItem cookieObject={cookie} key={cookie.id} />)
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        {cookieList}
      </ListWrapper>
    </div>
  )
}

export default CookieList;