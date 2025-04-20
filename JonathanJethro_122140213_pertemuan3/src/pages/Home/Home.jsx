// src/pages/Home/Home.jsx
import { useState } from 'react'
import { BookForm } from '../../Components/BookForm/BookForm'
import { BookList } from '../../Components/BookList/BookList'
import { useBooks } from '../../context/BookContext'
import './Home.css'

export function Home() {
  const { books, addBook, editBook, deleteBook } = useBooks()
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="home-page">
      <h1>Manajer Buku Saya</h1>
      
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="toggle-form-button"
      >
        {showForm ? 'Tutup Form' : 'Tambah Buku Baru'}
      </button>
      
      {showForm && (
        <div className="form-container">
          <BookForm onSubmit={addBook} />
        </div>
      )}
      
      <BookList 
        books={books} 
        onEdit={editBook} 
        onDelete={deleteBook} 
      />
    </div>
  )
}
