import { useState } from 'react'
import PropTypes from 'prop-types'
import './BookList.css'

export function BookList({ books, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredBooks = books
    .filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => filterStatus === 'all' || book.status === filterStatus)

  const handleEditClick = (id) => {
    setEditingId(id)
  }

  const handleCancelEdit = () => {
    setEditingId(null)
  }

  const handleSaveEdit = (id, updatedBook) => {
    onEdit(id, updatedBook)
    setEditingId(null)
  }

  return (
    <div className="book-list-container">
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Cari buku..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="status-filter"
        >
          <option value="all">Semua Status</option>
          <option value="owned">Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibaca</option>
        </select>
      </div>

      {filteredBooks.length === 0 ? (
        <p className="no-books-message">Buku tidak ditemukan</p>
      ) : (
        <ul className="book-list">
          {filteredBooks.map(book => (
            <li key={book.id} className="book-item">
              {editingId === book.id ? (
                <BookForm
                  initialData={book}
                  onSubmit={(updatedBook) => handleSaveEdit(book.id, updatedBook)}
                  buttonText="Simpan"
                />
              ) : (
                <>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p>oleh {book.author}</p>
                    <span className={`status-badge ${book.status}`}>
                      {book.status === 'owned' && 'Dimiliki'}
                      {book.status === 'reading' && 'Sedang Dibaca'}
                      {book.status === 'wishlist' && 'Ingin Dibaca'}
                    </span>
                  </div>
                  <div className="book-actions">
                    <button onClick={() => handleEditClick(book.id)}>Ubah</button>
                    <button onClick={() => onDelete(book.id)}>Hapus</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['owned', 'reading', 'wishlist']).isRequired
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
