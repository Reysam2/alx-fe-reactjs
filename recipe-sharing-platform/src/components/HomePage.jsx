// import Card from "./Card";
import { useState, useEffect } from "react";
import recipeData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full h-[5rem] bg-red-200 flex justify-center items-center">
        <h1 className="text-blue-500 px-4 py-2.5 rounded-md border shadow ">
          Navbar
        </h1>
      </div>

      <div className="w-full h-full grid grid-cols-1 gap-10 p-4 place-items-center sm:gap-7 sm:gap-y-15 mt-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">

        {/* render recipes from the recipes state */}
        {recipes.map((recipe) => {
          return (
            <div className="card w-[15rem] h-[16rem] bg-gray-300  flex flex-col justify-around items-center rounded-md hover:shadow-xl hover:drop-shadow-xl">
              <div className="bg-orange-400 w-[90%] h-[45%] flex items-center justify-center overflow-hidden">
                <img
                  className="h-28 text-center w-28 rounded-[20rem] bg-amber-100 grid place-items-center text-xs hover:scale-120 "
                  src={recipe.image}
                  alt={`${recipe.title} Picture`}
                />
              </div>

              <div className="bg-orange-200 w-[90%] h-[45%] flex flex-col items-center  ">
                <div className=" mb-2">
                  <h2 className="font-bold text-lg mt-1.5">{recipe.title}</h2>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-center">{recipe.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
