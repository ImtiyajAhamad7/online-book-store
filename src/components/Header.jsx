
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='' >
       <ul style={{display:'flex' ,justifyContent:'center' , alignItems:'center'  , listStyle:"none"}} > 
        <li><Link to='/'>Home Page</Link></li>
        <li><Link to='/BookList'>List Page</Link></li>
        <li><Link to='/AddBooks'>Add Books</Link></li>
       </ul>      
    </div>
  )
}

export default Header
