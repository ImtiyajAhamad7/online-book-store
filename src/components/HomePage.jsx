import popularBooks from "../data/popularBooks";
import { Link } from "react-router-dom";

export const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery'];


const HomePage = () => {
  

  return (
    <div>
 
      <h1>Welcome to Our Online Book Store!</h1>
      {
        categories.map(category =>{
            return (
              <div key={category}>
                <h2>{category}</h2>
                <ul>
                  {
                    popularBooks.filter(book =>
                        (book.category === category && book.rating > 4.5)
                    ).map(book => {
                      return (
                     <>
                        <li key={book.id}>{book.title}</li>
                        <Link to={`/book/${book.id}`}>Read More</Link>

                     </>
                    
                    )
                    })
                  }
                </ul>
              </div>
            )
        })
      }
    </div>
  )
}

export default HomePage
