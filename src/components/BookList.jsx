// src/components/BookList.js

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BookList = () => {
  // Fetch the list of books from the Redux store
  const books = useSelector((state) => state.books.popularBooks);

  // Local state to manage search results
  const [filteredBooks, setFilteredBooks] = useState(books);

  // Search function to filter books based on title
  const searchFunc = (e) => {
    const searchValue = e.target.value.toLowerCase();
    // Filter books by title
    const filteredList = books.filter((book) =>
      book.title.toLowerCase().includes(searchValue)
    );
    setFilteredBooks(filteredList);
  };

  // Get unique categories from the filtered books
  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div>
      <input
        type="text"
        placeholder="Search book title here"
        onChange={searchFunc}
      />

      <h1>Book List</h1>
      {categories.map((category) => {
        // Filter books by category
        const booksInCategory = filteredBooks.filter(
          (book) => book.category === category
        );

        return (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {booksInCategory.map((book) => (
                <div key={book.id}>
                  <li>{book.title}</li>
                  <Link to={`/book/${book.id}`}>Read More</Link>
                </div>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
