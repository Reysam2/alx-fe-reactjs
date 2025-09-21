import { useState } from "react";
import useRecipeStore from "./recipeStore";
import "./AddRecipeForm.css";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="recipe__form-blk">
      <form onSubmit={handleSubmit} className="form">
        <div className="form__heading-blk">
          <h1 className="form__heading">Create a Recipe</h1>
        </div>

        <div className="form__field">
          <input
            className="recipe__title"
            type="text"
            value={title}
            placeholder="Recipe Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form__field">
          <textarea
            className="recipe__description"
            name="Description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form__submit-btn">
          <button type="submit" className="submit-btn">
            Add Recipe
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddRecipeForm;
