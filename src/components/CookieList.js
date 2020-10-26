import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from './CookieItem';
import SearchBar from './SearchBar';

const CookieList = ({ cookies, setCookie, deleteCookie }) => {
  const [query, setQuery] = useState("");

  const filteredCookies = cookies.filter(cookie => cookie.name.toLowerCase().includes(query.toLowerCase()))
  const cookieList = filteredCookies.map(cookie => (
    <CookieItem cookie={cookie} setCookie={setCookie} deleteCookie={deleteCookie} key={cookie.id} />
  ))

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">
        {cookieList}
      </ListWrapper>
    </div>
  )
}

export default CookieList;