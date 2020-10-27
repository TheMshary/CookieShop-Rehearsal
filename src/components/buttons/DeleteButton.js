import React from 'react'

// Stores
import cookieStore from '../../stores/cookieStore';

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookie }) => {
  const handleDelete = () => cookieStore.deleteCookie(cookie.id)
  return (
    <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
  )
}

export default DeleteButton
