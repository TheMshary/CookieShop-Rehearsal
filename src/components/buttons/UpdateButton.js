import React, { useState } from 'react'

import { UpdateButtonStyled } from '../../styles';
import CookieModal from '../modals/CookieModal';

const UpdateButton = ({ cookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>
        Update
      </UpdateButtonStyled>
      <CookieModal isOpen={isOpen} closeModal={closeModal} oldCookie={cookie} />
    </>
  )
}

export default UpdateButton
