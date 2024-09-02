import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { addBook } from "../bookSlice";

const AddBooks = () => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    description: '',
    category: '',
    rating: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.description && book.category && book.rating) {
      dispatch(addBook({ ...book}));
      navigate('/BookList'); // Redirect to Browse Books page
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={book.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={book.category} onChange={handleChange} />
        <input type="number" name="rating" placeholder="Rating" value={book.rating} onChange={handleChange} min="0" max="5" step="0.1" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBooks
