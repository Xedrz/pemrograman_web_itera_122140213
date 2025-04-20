// src/components/BookFilter/BookFilter.jsx
import PropTypes from 'prop-types'
import './BookFilter.css'

export function BookFilter({ onFilterChange }) {
  const handleStatusChange = (e) => {
    onFilterChange(e.target.value)
  }

  return (
    <div className="book-filter">
      <select onChange={handleStatusChange} defaultValue="all">
        <option value="all">All Books</option>
        <option value="owned">Owned</option>
        <option value="reading">Currently Reading</option>
        <option value="wishlist">Wishlist</option>
      </select>
    </div>
  )
}

BookFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}