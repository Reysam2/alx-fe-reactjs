import { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";
import RecipeStore from "../store/Store";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  const userRecipes = RecipeStore((state) => state.userRecipes);

  useEffect(() => {
    if (userRecipes.length === 0) {
      setRecipes(recipeData);
      return;
    }

    const newRecipes = [

      ...recipeData,
      ...userRecipes.filter((ur) => !recipeData.some((rd) => ur.id === rd.id)),
    ];

    setRecipes(newRecipes);
  }, [userRecipes]);


  return (
    <div className="flex flex-col items-center justify-center bg-amber-100  w-full h-full p-5">
      <div className="w-full h-full grid grid-cols-1 gap-10 p-4 place-items-center sm:gap-7 sm:gap-y-15 mt-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {/* render recipes from the recipes state */}
        
        {recipes.map((recipe) => {
          return (
            // Card
            <Link key={recipe.id}>
              <div className="CARD w-[15rem] h-[16rem]  border border-gray-200 bg-amber-50  flex flex-col justify-around items-center rounded-md hover:shadow-amber-100 hover:shadow-md hover:drop-shadow-lg hover:drop-shadow-amber-900 transition duration-200 ease-in-out">
                <div className=" w-[90%] h-[45%] flex items-center justify-center overflow-hidden ">
                  <img
                    className="h-28 text-center w-28 rounded-[20rem] bg-amber-100 grid place-items-center text-xs hover:scale-110 transition-transform duration-200 "
                    src={recipe.image}
                    alt={`${recipe.title} Picture`}
                  />
                </div>

                <div className=" w-[90%] h-[45%] flex flex-col items-center  ">
                  <div className=" mb-2">
                    <h2 className="font-bold text-lg mt-1.5 text-amber-900">{recipe.title}</h2>
                  </div>
                  <div className="h-8.5 overflow-y-hidden ">
                    <p className="text-xs text-center text-amber-800">{recipe.summary}</p>
                  </div>

                  <div className="mt-1">
                    <Link
                      className="text-amber-600 font-bold text-sm hover:underline hover:underline-offset-3 transition duration-200 ease-in-out"
                      to={`/recipe-detail/${recipe.id}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
