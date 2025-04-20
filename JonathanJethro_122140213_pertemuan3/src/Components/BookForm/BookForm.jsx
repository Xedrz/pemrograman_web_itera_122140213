// src/components/BookForm/BookForm.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'
import './BookForm.css'

export function BookForm({ onSubmit, initialData, buttonText }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    author: '',
    status: 'owned'
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.author.trim()) newErrors.author = 'Author is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    onSubmit(formData)
    if (!initialData) {
      setFormData({
        title: '',
        author: '',
        status: 'owned'
      })
    }
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className={errors.author ? 'error' : ''}
        />
        {errors.author && <span className="error-message">{errors.author}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="owned">Owned</option>
          <option value="reading">Currently Reading</option>
          <option value="wishlist">Wishlist</option>
        </select>
      </div>
      
      <button type="submit" className="submit-button">
        {buttonText || 'Add Book'}
      </button>
    </form>
  )
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.oneOf(['owned', 'reading', 'wishlist'])
  }),
  buttonText: PropTypes.string
}