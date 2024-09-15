import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

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
    <>
      <div className="container mt-5">
        <div className="mb-4">
          <input
            type="text"
            className="form-control border-dark rounded-pill shadow-sm"
            placeholder="Search book title here"
            onChange={searchFunc}
          />
        </div>

        {/* Categories Navigation */}
        <div className="mb-4">
          <h5 className="text-primary mb-3">Book Categories</h5>
          <nav>
            <ul className="nav nav-pills flex-column flex-sm-row">
              {categories.map((category) => (
                <li className="nav-item" key={category}>
                  <Link
                    to={`/booklist/${category}`}
                    className="nav-link text-dark border rounded-pill mx-1 my-1 p-2"
                    aria-current="page"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <h1 className="mb-4">Book List</h1>
        {categories.map((category) => {
          // Filter books by category
          const booksInCategory = filteredBooks.filter(
            (book) => book.category === category
          );

          return (
            <div key={category} className="mb-5">
              <h2 className="mb-3 text-secondary">{category}</h2>
              <div className="row">
                {booksInCategory.map((book) => (
                  <div
                    key={book.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  >
                    <div className="card h-100 shadow-lg border-light">
                      {book.img && (
                        <img
                          src={book.img}
                          className="card-img-top"
                          alt={book.title}
                          style={{
                            height: "250px",
                            objectFit: "cover",
                            borderBottom: "2px solid #f1f1f1",
                          }}
                        />
                      )}
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-dark">{book.title}</h5>
                        <p className="card-text text-muted">
                          {book.description.length > 100
                            ? `${book.description.substring(0, 100)}...`
                            : book.description}
                        </p>
                        <Link
                          to={`/book/${book.id}`}
                          className="btn btn-primary mt-auto"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookList;
