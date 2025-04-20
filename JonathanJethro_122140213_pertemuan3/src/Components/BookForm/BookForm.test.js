// src/components/BookForm/BookForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { BookForm } from './BookForm'

test('shows validation errors when form is submitted empty', () => {
  const mockSubmit = jest.fn()
  render(<BookForm onSubmit={mockSubmit} />)
  
  fireEvent.click(screen.getByText(/add book/i))
  
  expect(screen.getByText(/title is required/i)).toBeInTheDocument()
  expect(screen.getByText(/author is required/i)).toBeInTheDocument()
  expect(mockSubmit).not.toHaveBeenCalled()
})

test('calls onSubmit with form data when valid', () => {
  const mockSubmit = jest.fn()
  render(<BookForm onSubmit={mockSubmit} />)
  
  fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Book' } })
  fireEvent.change(screen.getByLabelText(/author/i), { target: { value: 'Test Author' } })
  fireEvent.click(screen.getByText(/add book/i))
  
  expect(mockSubmit).toHaveBeenCalledWith({
    title: 'Test Book',
    author: 'Test Author',
    status: 'owned'
  })
})