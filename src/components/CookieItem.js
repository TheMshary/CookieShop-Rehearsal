import React from 'react'

// Styles
import { CookieWrapper } from "../styles";

const CookieItem = (props) => {
  return (
    <CookieWrapper>
      <img src={props.cookieObject.image} alt={props.cookieObject.name} />
      <p>{props.cookieObject.name}</p>
      <p className="cookie-price">{props.cookieObject.price} KD</p>
    </CookieWrapper>
  )
}

export default CookieItem;
