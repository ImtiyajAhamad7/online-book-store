import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { addBook } from "../bookSlice";
// import "../assets/styles/addbookstyle.css";
import Header from "./Header";

const AddBooks = () => {
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
    category: "",
    rating: "",
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
    if (
      book.title &&
      book.author &&
      book.description &&
      book.category &&
      book.rating
    ) {
      dispatch(addBook({ ...book }));
      navigate("/BookList"); // Redirect to Browse Books page
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Title"
              value={book.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="form-control"
              placeholder="Author"
              value={book.author}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              placeholder="Description"
              value={book.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="form-control"
              placeholder="Category"
              value={book.category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="form-control"
              placeholder="Rating"
              value={book.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pLink" className="form-label">
              Picture Link (Optional)
            </label>
            <input
              type="text"
              id="pLink"
              name="img"
              className="form-control"
              placeholder="Paste Link here"
              value={book.img}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBooks;
