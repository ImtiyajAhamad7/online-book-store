import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const BookDetails = () => {
    let {id} = useParams();
    const books = useSelector((state) => state.books.popularBooks);
    const book = books.find((book) => book.id === parseInt(id));
    console.log("book", book)
  return (
    <div>
      <Link to={'/BookList'}>Back to list</Link>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Rating:</strong> {book.rating}</p>
        </>
      ) : (
        <p>Book not found!</p>
      )}
    </div>
  )
}

export default BookDetails
