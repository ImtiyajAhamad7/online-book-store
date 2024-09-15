import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const BookDetails = () => {
  let { id } = useParams();
  const books = useSelector((state) => state.books.popularBooks);
  const book = books.find((book) => book.id === parseInt(id));

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/booklist" className="btn btn-outline-primary">
            <IoMdArrowBack />
            Back to list
          </Link>
        </div>

        {book ? (
          <div className="row">
            <div className="col-md-4">
              {book.img && (
                <img
                  src={book.img}
                  className="img-fluid"
                  alt={book.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
              )}
            </div>
            <div className="col-md-8">
              <h1>{book.title}</h1>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Description:</strong> {book.description}
              </p>
              <p>
                <strong>Category:</strong> {book.category}
              </p>
              <p>
                <strong>Rating:</strong> {book.rating}
              </p>
            </div>
          </div>
        ) : (
          <p>Book not found!</p>
        )}
      </div>
    </>
  );
};

export default BookDetails;
