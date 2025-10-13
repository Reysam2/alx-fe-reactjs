import { createBrowserRouter } from "react-router-dom";
import ProfileDetails from '../components/ProfileDetails';
import ProfileSettings from '../components/ProfileSettings';
import Profile from "../components/Profile";
import Home from "../components/Home";
import Login from "../components/Login"
import BlogPost from "../components/BlogPost";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/profile',
    element: <Profile />,
    children: [{
      
      index: true,
      element: <ProfileDetails />
    },
    {
      path: 'settings',
      element: <ProfileSettings />
    }
    ]
  }, {
    path: '/login',
    element: <Login />
  },
    {
    path: '/posts/:id',
    element: <BlogPost />
  }
])

export default router