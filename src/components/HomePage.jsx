import React from "react";
import popularBooks from "../data/popularBooks";
import { Link } from "react-router-dom";

// Define categories
export const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Fantasy",
  "Mystery",
];

const HomePage = () => {
  return (
    <div className="container-lg mt-5">
      <h1 className="mb-4 text-center">Welcome to Our Online Book Store!</h1>
      <h5 className="text-primary mb-4 text-center">
        Check out some of our popular books
      </h5>
      {categories.map((category) => (
        <div key={category} className="mb-5">
          <h2 className="mb-3 text-secondary text-center">{category}</h2>
          <div className="row">
            {popularBooks
              .filter((book) => book.category === category && book.rating > 4.5)
              .map((book) => (
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
      ))}
    </div>
  );
};

export default HomePage;
