import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
const BookListCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.popularBooks);
  const filterbook = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4">
        <button
          className="btn btn-outline-primary d-flex align-items-center mb-3 mb-sm-0"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowBack /> Back
        </button>
        <h1 className="mb-0 text-center flex-grow-1 fs-4 fs-sm-3 fs-md-2">{`Books in "${category}"`}</h1>
      </div>
      <div className="row">
        {filterbook.length > 0 ? (
          filterbook.map((book) => (
            <div
              key={book.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="card h-100 shadow-lg border-0">
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
                  <h5 className="card-title text-dark fs-6 fs-md-5">
                    {book.title}
                  </h5>
                  <p className="card-text text-muted fs-6 fs-md-5">
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
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info" role="alert">
              No books found in this category.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookListCategory;
