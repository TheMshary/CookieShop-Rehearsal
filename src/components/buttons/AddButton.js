import React, { useState } from 'react'

// Styles
import { BsPlusCircle } from 'react-icons/bs';

// Components
import CookieModal from '../modals/CookieModal';

const AddButton = ({ createCookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <CookieModal isOpen={isOpen} closeModal={closeModal} createCookie={createCookie} />
    </>
  )
}

export default AddButton
