import useRecipeStore from "./recipeStore";
import "./RecipeList.css";
import "./ViewButton.css";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { Link } from "react-router-dom"; 

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe__card-display">
      {recipes.map((recipe) => (
        <div className="recipe__card" key={recipe.id}>
          <h3 className="recipe__card-heading">{recipe.title}</h3>
          <p className="recipe__card-txt">{recipe.description}</p>
          <Link to={`/recipe-details/${recipe.id}`} className="view-btn">
            View
          </Link>

          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
