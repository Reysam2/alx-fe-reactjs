import useRecipeStore from "./recipeStore";
import "./RecipeList.css";
import { Link } from "react-router-dom"; 
import FavoritesButton from "./FavoriteButton";

function RecommendationsList() {
  const favoritesIds = useRecipeStore((state) => state.favorites);

 const recipes = useRecipeStore(state => state.recipes)

 const favorites = recipes.filter((recipe) => favoritesIds.includes(recipe.id))
 
    if (favorites.length === 0) {
    return <p className="recipe__card-heading">No Favorites yet. Add some favorites.</p>;
  }

  return (
    <div className="recipe__card-display">
      {favorites.map((recipe) => (
        <div className="recipe__card" key={recipe.id}>
          <h3 className="recipe__card-heading">{recipe.title}</h3>
          <p className="recipe__card-txt">{recipe.description}</p>
          <Link to={`/recipe-details/${recipe.id}`} className="view-btn">
            View
          </Link>

          <FavoritesButton key={recipe.id} recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
}

export default RecommendationsList;
