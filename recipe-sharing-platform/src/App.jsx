import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import CreateRecipe from "./components/CreateRecipe.jsx";
import Navbar from "./components/Navbar.jsx";
Navbar


 function App() {
  return ( 
    <Router>
           <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
     </Routes>
    </Router>
   );
 }
 
 export default App;