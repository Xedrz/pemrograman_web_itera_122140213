// src/App.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { BookProvider } from './context/BookContext'

test('renders home page by default', () => {
  render(
    <BookProvider>
      <App />
    </BookProvider>
  )
  
  expect(screen.getByText(/my book manager/i)).toBeInTheDocument()
})

test('navigates to stats page', () => {
  render(
    <BookProvider>
      <App />
    </BookProvider>
  )
  
  fireEvent.click(screen.getByText(/statistics/i))
  expect(screen.getByText(/book statistics/i)).toBeInTheDocument()
})