import React, { useState } from 'react'
import Modal from 'react-modal';

// Styles
import { CreateButtonStyled } from '../../styles';

// Stores
import cookieStore from '../../stores/cookieStore';

const CookieModal = ({ isOpen, closeModal, oldCookie }) => {
  const [cookie, setCookie] = useState(oldCookie ?? {
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
    cookieStore[oldCookie ? "updateCookie" : "createCookie"](cookie);
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
            <input onChange={handleChange} value={cookie.name} name="name" className="form-control" />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input onChange={handleChange} value={cookie.price} name="price" type="number" min="1" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input onChange={handleChange} value={cookie.description} name="description" className="form-control" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input onChange={handleChange} value={cookie.image} name="image" className="form-control" />
        </div>
        <CreateButtonStyled className="btn float-right">{oldCookie ? "Update" : "Create"}</CreateButtonStyled>
      </form>
    </Modal>
  )
}

export default CookieModal
