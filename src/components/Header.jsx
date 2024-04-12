import './Header.css';
import { Link } from "react-router-dom";
function Header() {

  return (
      <div className='Header'>
      <div className='Navigation'>
      <Link className="Navlink" to="/">
      <h1 className='Headertext'>Mario Character Party</h1>
      </Link>
      <Link className="Navlink Navbutton" to="/addcharacters">Add Characters</Link>
      <Link className="Navlink Navbutton" to="/viewcharacters">View Characters</Link>
      </div>
      </div>
  )
}

export default Header;
