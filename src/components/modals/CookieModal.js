import React, { useState } from 'react'
import Modal from 'react-modal';

// Styles
import { CreateButtonStyled } from '../../styles';

// Stores
import cookieStore from '../../stores/cookieStore';

const CookieModal = ({ isOpen, closeModal }) => {
  const [cookie, setCookie] = useState({
    name: "pikapika",
    price: 45,
    description: "pika cewkies",
    image: "https://i.pinimg.com/originals/8f/78/ab/8f78ab54190cb6d879cd4b8ff578cf0e.jpg",
  })

  const handleChange = event => {
    setCookie({ ...cookie, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    cookieStore.createCookie(cookie);
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
