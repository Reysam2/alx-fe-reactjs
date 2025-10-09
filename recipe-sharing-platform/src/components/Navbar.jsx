import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-[5rem]  bg-amber-50 flex justify-center items-center border border-amber-900 tracking-wide  ">
      <div className="w-[25%] h-[3rem]   flex justify-center items-center  text-2xl ">
        <h1 className="  text-amber-600 font-extrabold tracking-widest">RSA</h1>
      </div>

      <div className="w-[78%] h-[3rem]  flex  text-amber-800 ">
        <ul className="w-[100%] h-[100%] flex justify-center items-center font-bold transition duration-150 ease-in-out text-lg lg:justify-end lg:px-15 ">
          <li className="mr-5">
            <Link className="hover:text-amber-600 font-extrabold" to="/">Recipes</Link>
          </li>
          <li>
            <Link className="hover:text-amber-600 font-extrabold" to="/add-recipe">Add Recipes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
