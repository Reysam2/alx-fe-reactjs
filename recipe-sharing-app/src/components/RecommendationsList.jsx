import useRecipeStore from "./recipeStore";
import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FavoritesButton from "./FavoriteButton";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);

  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [ generateRecommendations]);

    if (recommendations.length === 0) {
    return <p>No recommendations yet. Add some favorites to see suggestions.</p>;
  }

  return (
    <div className="recipe__card-display">
      {recommendations.map((recipe) => (
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
