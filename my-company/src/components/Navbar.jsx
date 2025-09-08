import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Contact from "./Contact.jsx";

function Navbar() {
  return (
    <Router>
      <nav
        className="nav"
        style={{
          backgroundColor: "#000011",
          width: "100%",
          height: "10rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="nav__logo-blk">
          <h1>Sammy</h1>
        </div>

        <div className="link-blk">
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
            }}
            className="nav__link-blk"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
}
export default Navbar;
