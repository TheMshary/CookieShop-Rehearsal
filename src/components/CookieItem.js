import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import { CookieWrapper } from "../styles";

// Components
import DeleteButton from './buttons/DeleteButton';
import UpdateButton from './buttons/UpdateButton';

const CookieItem = ({ cookie, deleteCookie }) => {
  return (
    <CookieWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link to={`/cookies/${cookie.slug}`} className="d-flex justify-content-center">
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <UpdateButton cookie={cookie} />
      <DeleteButton deleteCookie={deleteCookie} cookie={cookie} />
    </CookieWrapper>
  )
}

export default CookieItem;
