import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-[100%] h-[8rem] bg-orange-800 flex justify-around items-center">
      <div className="w-[30%] flex justify-center  text-3xl font-extrabold text-amber-200">
        <h1>Todo App</h1>
      </div>

      <div className="w-[45%]  flex justify-start text-amber-200 font-bold max-sm:text-[clamp(1.6rem,1.5vw,2rem)]">
        <Link className="mr-4" to="/">Todo List</Link>
        <Link to="/create-todo">Add Todo</Link>
      </div>
    </nav>
  );
}

export default NavBar;
