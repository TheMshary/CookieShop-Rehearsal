import React from "react";

// Data
import cookies from "../cookies";

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from './CookieItem';

const CookieList = () => {
  const cookieList = cookies.map(cookie => <CookieItem cookieObject={cookie} key={cookie.id} />)
  return (
    <ListWrapper>
      {cookieList}
    </ListWrapper>
  )
}

export default CookieList;