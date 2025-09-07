import "./App.css";
import UserProfile from "./components/UserProfile";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const data = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography",
  };

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <UserContext.Provider value={data}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}

export default App;
