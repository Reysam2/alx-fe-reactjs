import useRecipeStore from "./recipeStore";
import "./RecipeList.css";
import { Link } from "react-router-dom";
import FavoritesButton from "./FavoriteButton";

function FavoritesList() {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div className="recipe__card-display">
      <h2>My Favorites</h2>
      {favorites.filter(Boolean).map((recipe) => (
        <div className="recipe__card" key={recipe.id}>
          <h3 className="recipe__card-heading">{recipe.title}</h3>
          <p className="recipe__card-txt">{recipe.description}</p>
          <Link to={`/recipe-details/${recipe.id}`}>View</Link>{" "}
          <FavoritesButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
}
export default FavoritesList;
