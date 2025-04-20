import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const BookContext = createContext()

export function useBooks() {
  return useContext(BookContext)
}

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('books', [])

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }])
  }

  const editBook = (id, updatedBook) => {
    setBooks(books.map(book => book.id === id ? { ...book, ...updatedBook } : book))
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const getBookById = (id) => {
    return books.find(book => book.id === id)
  }

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook, getBookById }}>
      {children}
    </BookContext.Provider>
  )
}

// 🔥 Ini hook tambahan untuk statistik
export function useBookStats() {
  const { books } = useBooks()

  const total = books.length
  const owned = books.filter(book => book.status === 'owned').length
  const reading = books.filter(book => book.status === 'reading').length
  const wishlist = books.filter(book => book.status === 'wishlist').length

  return { total, owned, reading, wishlist }
}
