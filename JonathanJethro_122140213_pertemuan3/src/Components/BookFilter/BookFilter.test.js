// src/components/BookFilter/BookFilter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../../../context/BookContext';
import BookFilter from './BookFilter';

describe('BookFilter', () => {
  test('renders filter and search inputs', () => {
    render(
      <BookProvider>
        <BookFilter />
      </BookProvider>
    );
    
    expect(screen.getByLabelText('Filter by status:')).toBeInTheDocument();
    expect(screen.getByLabelText('Search:')).toBeInTheDocument();
  });

  test('updates filter value when changed', () => {
    render(
      <BookProvider>
        <BookFilter />
      </BookProvider>
    );
    
    const filterSelect = screen.getByLabelText('Filter by status:');
    fireEvent.change(filterSelect, { target: { value: 'reading' } });
    expect(filterSelect.value).toBe('reading');
  });

  test('updates search term when typed', () => {
    render(
      <BookProvider>
        <BookFilter />
      </BookProvider>
    );
    
    const searchInput = screen.getByLabelText('Search:');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});