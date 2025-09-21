import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";  
import AddRecipeForm from "../components/AddRecipeForm";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/create-recipes" element={<AddRecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
