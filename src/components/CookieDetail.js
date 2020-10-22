import React from 'react'

// Styles
import { DetailWrapper, GoBackButton } from '../styles';

const CookieDetail = (props) => {
  const cookie = props.cookie;
  return (
    <>
      <GoBackButton onClick={() => props.setCookie(null)}>{"<"} Cookie List</GoBackButton>
      <DetailWrapper>
        <h1>{cookie.name}</h1>
        <img src={cookie.image} alt={cookie.name} />
        <p>{cookie.description}</p>
        <p>{cookie.price} KD</p>
      </DetailWrapper>
    </>
  )
}

export default CookieDetail;
