import React, { useState } from 'react'
import Modal from 'react-modal';

// Styles
import { CreateButtonStyled } from '../../styles';

const CookieModal = ({ isOpen, closeModal, createCookie }) => {
  const [cookie, setCookie] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  })

  const handleChange = event => {
    setCookie({ ...cookie, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    createCookie(cookie);
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contenLabel="Cookie Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input onChange={handleChange} name="name" className="form-control" />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input onChange={handleChange} name="price" type="number" min="1" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input onChange={handleChange} name="description" className="form-control" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input onChange={handleChange} name="image" className="form-control" />
        </div>
        <CreateButtonStyled className="btn float-right">Create</CreateButtonStyled>
      </form>
    </Modal>
  )
}

export default CookieModal
