// import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav__logo-blk"> 
            <h1>Samuel</h1> 
        </div>

        <div className="nav__link-blk">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
