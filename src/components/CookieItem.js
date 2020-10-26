import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import { CookieWrapper } from "../styles";

// Components
import DeleteButton from './buttons/DeleteButton';

const CookieItem = (props) => {

  return (
    <CookieWrapper>
      <Link to={`/cookies/${props.cookieObject.id}`}>
        <img src={props.cookieObject.image} alt={props.cookieObject.name} />
      </Link>
      <p>{props.cookieObject.name}</p>
      <p className="cookie-price">{props.cookieObject.price} KD</p>
      <DeleteButton deleteCookie={props.deleteCookie} cookie={props.cookieObject} />
    </CookieWrapper>
  )
}

export default CookieItem;
