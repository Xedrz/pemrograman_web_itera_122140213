// src/components/BookList/BookList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';

describe('BookList', () => {
  const mockBooks = [
    { id: 1, title: 'Book 1', author: 'Author 1', status: 'owned' },
    { id: 2, title: 'Book 2', author: 'Author 2', status: 'reading' }
  ];

  const mockEdit = jest.fn();
  const mockDelete = jest.fn();

  test('renders list of books', () => {
    render(
      <BookList books={mockBooks} onEdit={mockEdit} onDelete={mockDelete} />
    );
    
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('by Author 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
    expect(screen.getByText('by Author 2')).toBeInTheDocument();
  });

  test('shows edit form when edit button clicked', () => {
    render(
      <BookList books={mockBooks} onEdit={mockEdit} onDelete={mockDelete} />
    );
    
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(screen.getByText('Update Book')).toBeInTheDocument();
  });

  test('calls delete function when delete button clicked', () => {
    render(
      <BookList books={mockBooks} onEdit={mockEdit} onDelete={mockDelete} />
    );
    
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});