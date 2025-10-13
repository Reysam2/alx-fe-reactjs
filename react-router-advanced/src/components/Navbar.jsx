import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-20 flex justify-between items-center px-6 bg-amber-700 border border-amber-700">
      <div>
        <h2>Logo</h2>
      </div>

      <div className="w-[60%]">
        <ul className="flex border list-none ">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-2">
            <Link to="/login">Login</Link>
          </li>
           <li className="mx-2">
            <Link to="/posts:id">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
