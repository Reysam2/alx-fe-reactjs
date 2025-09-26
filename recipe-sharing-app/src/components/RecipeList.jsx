import useRecipeStore from "./recipeStore";
import "./RecipeList.css";
import "./ViewButton.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FavoritesButton from "./FavoriteButton.jsx";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  console.log(recipes);

  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const listToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div className="recipe__card-display">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
        <button
          onClick={filterRecipes}
          style={{
            padding: "0.3rem 1.5rem",
            border: "none",
            borderRadius: "0rem 0.5rem 0.5rem 0",
            background: "rgb(84, 242, 84)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "5rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '3rem'
        }}
      >
        <Link to="/favorites" className="view-btn "  style={{
          position: 'relative', 
        }}>
        View Favorite Recipes
        </Link>

        <Link style={{
          position: 'relative',
          marginLeft: '5rem',
        }} to="/recommended-recipes" className="view-btn ">
           View Recommended Recipes 
        </Link>
      </div>

      {listToShow.map((recipe) => (
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
};

export default RecipeList;
