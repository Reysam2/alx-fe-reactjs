import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import Home from "./Home";

function Profile() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Welcome {postId}</h1>

      <nav className="w-full h-20 flex justify-center items-center px-6 bg-amber-700 space-x-10 border border-amber-700">
        <Link to="">Details</Link>
        <Link to="settings">Settings</Link>
        <Link to="/">Home</Link>
      </nav>

      <h1>This is the Profile Page</h1>

      {/* Include nested routes directly inside Profile */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Profile;
