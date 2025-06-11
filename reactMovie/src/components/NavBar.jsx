import { Link } from "react-router-dom"
import "../css/NavBar.css";

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-logo">
            <Link to={'/'}>Movie Finder</Link>
        </div>
        <div className="navbar-links">
            <Link to={'/'} className="navbar-link">Home</Link>
             <Link to={'/favorites'} className="navbar-link">Favorites</Link>
        </div>
    </nav>
}
export default NavBar