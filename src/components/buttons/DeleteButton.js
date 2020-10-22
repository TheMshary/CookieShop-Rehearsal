import React from 'react'

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => props.deleteCookie(props.cookie.id)
  return (
    <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
  )
}

export default DeleteButton
