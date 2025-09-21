import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo-blk">
        <h1 className="nav__logo-txt">RSA</h1>
      </div>

      <div className="nav__links-blk">
        <ul className="nav__links">
          <li className="nav__link-item">
            <Link to="/" className="nav__link" >
              My RecipeList
            </Link>
          </li>

          <li className="nav__link-item">
            <Link to="/create-recipes" className="nav__link" >
              Create Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
