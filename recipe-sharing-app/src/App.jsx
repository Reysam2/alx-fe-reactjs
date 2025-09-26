import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";


function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/create-recipes" element={<AddRecipeForm />} />

          <Route path="/recipe-details/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommended-recipes" element={<RecommendationsList />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
