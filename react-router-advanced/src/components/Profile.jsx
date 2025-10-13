import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function Profile() {

  const {postId} = useParams()
  return ( 
    <div>
      <h1> Welcome {postId}</h1>
      <nav className="w-full h-20 flex justify-center items-center px-6 bg-amber-700 space-x-10 border border-amber-700">
        <Link to=".">Details</Link>
        <Link to="/">Home</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <h1>This is the profile Page</h1>

      <Outlet />
    </div>
   );
}

export default Profile;