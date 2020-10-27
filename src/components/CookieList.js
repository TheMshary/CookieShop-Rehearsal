import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from './CookieItem';
import SearchBar from './SearchBar';
import AddButton from './buttons/AddButton';

const CookieList = ({ cookies, setCookie, deleteCookie, createCookie }) => {
  const [query, setQuery] = useState("");
  const filteredCookies = cookies.filter(cookie => cookie.name.toLowerCase().includes(query.toLowerCase()))
  const cookieList = filteredCookies.map(cookie => (
    <CookieItem cookie={cookie} setCookie={setCookie} deleteCookie={deleteCookie} key={cookie.id} />
  ))

  return (
    <div className="container">
      <AddButton createCookie={createCookie} />
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">
        {cookieList}
      </ListWrapper>
    </div>
  )
}

export default CookieList;