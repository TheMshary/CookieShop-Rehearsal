import React from 'react'
import { useParams, Redirect } from 'react-router-dom';
import cookieStore from '../stores/cookieStore';

// Styles
import { DetailWrapper } from '../styles';

const CookieDetail = () => {
  const { cookieSlug } = useParams();
  const cookie = cookieStore.cookies.find(cookie => cookie.slug === cookieSlug);
  if (!cookie) return <Redirect to="/cookies/" />
  return (
    <>
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
