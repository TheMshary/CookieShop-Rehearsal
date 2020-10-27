import React, { useState } from "react";
import { observer } from 'mobx-react';

// Stores
import cookieStore from '../stores/cookieStore';

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from './CookieItem';
import SearchBar from './SearchBar';
import AddButton from './buttons/AddButton';

const CookieList = ({ deleteCookie, createCookie }) => {
  const [query, setQuery] = useState("");
  const filteredCookies = cookieStore.cookies.filter(cookie => cookie.name.toLowerCase().includes(query.toLowerCase()))
  const cookieList = filteredCookies.map(cookie => (
    <CookieItem cookie={cookie} deleteCookie={deleteCookie} key={cookie.id} />
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

export default observer(CookieList);