import useRecipeStore from "./recipeStore"; 
import "./AddRecipeForm.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditRecipeForm() {

  const {recipeId} = useParams();

  const navigate = useNavigate()

  const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === Number(recipeId)))

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

    // Pre-fill inputs when recipe is found

    useEffect(() => {
      if(recipe) {
        setTitle(recipe.title)
        setDescription(recipe.description)
      }

    }, [recipe])

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: Number(recipeId), title, description }); 
    navigate(`/recipe-details/${recipeId}`);
  };

  if(!recipe) {
    return <p>Recipe not found.</p>
  }

  return (
    <section className="recipe__form-blk">
      <form onSubmit={handleSubmit} className="form">
        <div className="form__heading-blk">
          <h1 className="form__heading">Edit Recipe</h1>
        </div>

        <div className="form__field">
          <input
            className="recipe__title"
            type="text"
            value={title}
            placeholder="Recipe Title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form__field">
          <textarea
            className="recipe__description"
            name="Description"
            value={description}
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="form__submit-btn">
          <button type="submit" className="submit-btn">
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};
export default EditRecipeForm;
