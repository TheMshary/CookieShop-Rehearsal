import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from './CookieItem';
import SearchBar from './SearchBar';

const CookieList = (props) => {
  const [query, setQuery] = useState("");

  const filteredCookies = props.cookies.filter(cookie => cookie.name.toLowerCase().includes(query.toLowerCase()))
  const cookieList = filteredCookies.map(cookie => (
    <CookieItem cookieObject={cookie} setCookie={props.setCookie} deleteCookie={props.deleteCookie} key={cookie.id} />
  ))
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