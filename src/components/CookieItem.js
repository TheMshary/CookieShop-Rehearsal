import React from 'react'

// Styles
import { CookieWrapper } from "../styles";

// Components
import DeleteButton from './buttons/DeleteButton';

const CookieItem = (props) => {

  return (
    <CookieWrapper>
      <img onClick={() => props.setCookie(props.cookieObject)} src={props.cookieObject.image} alt={props.cookieObject.name} />
      <p>{props.cookieObject.name}</p>
      <p className="cookie-price">{props.cookieObject.price} KD</p>
      <DeleteButton deleteCookie={props.deleteCookie} cookie={props.cookieObject} />
    </CookieWrapper>
  )
}

export default CookieItem;
