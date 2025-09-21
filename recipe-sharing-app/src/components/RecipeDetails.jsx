import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import "./RecipeList.css";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { recipeId } = useParams();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="recipe__card-display">
      <div className="recipe__card">
        <h1 className="recipe__card-heading">{recipe.title}</h1>
        <p className="recipe__card-txt">{recipe.description}</p>
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to={`/edit-recipe/${recipe.id}`} className="view-btn">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
