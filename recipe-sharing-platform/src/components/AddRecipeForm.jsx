import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RecipeStore from "../store/Store";

function AddRecipeForm() {
  const addRecipes = RecipeStore((state) => state.addRecipes);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipes = {
      id: Date.now(),
      title,
      summary,
      ingredients,
      cookingInstructions,
    };

    if (
      !title.trim() ||
      !summary.trim() ||
      !ingredients.trim() ||
      !cookingInstructions.trim()
    ) {
      setError(true);
      return;
    }

    setError(false);
    addRecipes(newRecipes);
    setTitle("");
    setSummary("");
    setIngredients("");
    setCookingInstructions("");
    
    navigate("/");

  };

  return (
    <div className="min-h-[50rem] w-dvw bg-amber-50 flex flex-col items-center justify-center">
      <div className="mt-15 font-bold  text-[clamp(1.8rem,1.5vw,3rem)] text-center  text-amber-900 tracking-wide mx-5">
        <h1 className="mb-2">Feel Like Adding Your Own Recipes?</h1>
        <p className="text-[1.4rem]"> Fill the Form.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] h-[100%] sm:w-[30rem] p-5 flex flex-col justify-center "
      >
        <div className=" min-h-[35rem] text-sm text-amber-900 rounded-xl flex flex-col justify-around  bg-amber-100 p-5 my-[5rem] shadow-xl drop-shadow-xl">
          {/* form heading block */}
          <div className="w-[100%] h-[2rem] bg-conic-100 mb-1">
            <h1 className="font-bold  text-[clamp(1.3rem,1.5vw,2.5rem)] text-center tracking-wide">
              Create a Recipe
            </h1>
          </div>
          {/*form field */}
          <div className="mb-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border outline-none w-[100%] p-2 shadow-sm drop-shadow-sm"
              type="text"
              placeholder="Name of Recipe or Title"
            />
          </div>

          {/*form field */}
          <div className="mb-3">
            <textarea
              className="border outline-none  w-[100%] p-2 shadow-sm drop-shadow-sm"
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Summary or a brief description"
            ></textarea>
          </div>

          {/*form field */}
          <div className="mb-3">
            <input
              className="border outline-none w-[100%] p-2 shadow-sm drop-shadow-sm"
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Ingredients eg: 1.Tomato, 2.Onion, 3.Carrot... "
            />
          </div>

          {/*form field */}
          <div>
            <textarea
              className="border shadow-sm drop-shadow-sm outline-none w-[100%] p-2"
              type="text"
              value={cookingInstructions}
              onChange={(e) => setCookingInstructions(e.target.value)}
              placeholder="Preparation steps"
            ></textarea>
          </div>
          {error && 
            <h1 className="text-amber-800 text-xl text-center">Please enter a recipe</h1>
          }
          <button className="px-3.5 py-2 mt-4 border border-amber-900 rounded text-sm cursor-pointer hover:bg-amber-900  hover:text-amber-200 hover:font-extrabold active:scale-90 text-amber-900 transition duration-200 ease-in-out shadow-sm drop-shadow-sm ">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
