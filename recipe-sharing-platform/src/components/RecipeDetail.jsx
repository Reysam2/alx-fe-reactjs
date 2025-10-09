import { useParams } from "react-router-dom";
import recipesData from "../data.json";
import { Link } from "react-router-dom";
import RecipeStore from "../store/Store";
import { useMemo } from "react";


function RecipeDetail() {
  const { id } = useParams();
  const userRecipes = RecipeStore((state) => state.userRecipes)

  const newRecipes =  useMemo (() => [...recipesData, ...userRecipes], [userRecipes])
  
  const recipe = newRecipes.find((item) => item.id === parseInt(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    // Card container
    <div className="mt-10 overflow-scroll text-[clamp(1rem,2vw,1.25rem)] flex flex-col p-5 bg-orange-300 justify-between items-center">
      {/* Card */}
      <div className="min-h-[40rem] min-w-[95%] md:w-[100%] flex flex-col justify-around items-center lg:grid lg:grid-cols-[30rem_minmax(30rem,40rem)] md:grid-cols-[21rem_34rem] md:justify-items-center gap-2 bg-blue-300 ">
        {/* Img Block */}
        <div className="bg-orange-900 w-[20rem] h-[15rem] lg:w-[100%] lg:h-[70%]  flex items-center justify-center overflow-hidden">
          <img
            className="w-[100%] h-[100%] text-center rounded-[1rem] bg-amber-100 flex justify-center items-center text-xs hover:scale-110 transition-transform duration-200 md:h-[100%] md:w-[100%] md:rounded-none"
            src={recipe.image}
            alt={`${recipe.title} Picture`}
          />
        </div>

        {/* Card info block */}
        <div className="bg-orange-200 w-[100%] min-h-[30rem] flex flex-col items-center    ">
          <div className=" mb-3">
            <h2 className="font-bold text-lg mt-1.5">{recipe.title}</h2>
          </div>
          {/* Summary block */}
          <div className="w-[100%] min-h-[3rem] bg-amber-500 mt-3 ">
            <div className="mt-4 w-[100%] min-h-[3rem] ">
              <h3 className="text-center font-bold bg-amber-50">Summary</h3>
            </div>
            <p className="text-[clamp(0.89rem,2vw,1rem)] text-center">{recipe.summary}</p>
          </div>

          {/* Ingredients */}
          <div className="mt-5 w-[100%] min-h-[3rem] ">
            <h3 className="text-center font-bold mb-1.5 bg-amber-50">Ingredients</h3>
            <p className="text-[clamp(0.89rem,2vw,1rem)] text-center">
              {recipe.ingredients} Ingredients Lorem ipsum dolor sit.
            </p>
          </div>
          {/* Cooking instructions */}
          <div className="bg-red-200 w-[100%] min-h-[3rem]  flex flex-wrap mt-5">
              {/* cooking instructions heading block */}
            <div className="w-[100%] mb-5 bg-red-300  ">
              {/* cooking instructions heading */}
              <h3 className=" text-center font-bold  mb-1.5">
                Cooking Instructions
              </h3>
            </div>

            <div className="flex flex-wrap">
              {/* cooking instructions  */}
              <p className="text-[clamp(0.89rem,2vw,1rem)] text-center">
                {recipe.cookingInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="mt-6 text-blue-600 font-medium hover:underline hover:text-blue-800"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetail;
