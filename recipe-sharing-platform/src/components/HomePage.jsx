import Card from "./Card";
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
        <h1 className="text-blue-500">The Navbar goes here</h1>
      </div>

      <div className=" w-full h-full grid grid-col-1 gap-10 p-4 place-items-center sm:gap-7 sm:gap-y-15 mt-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {recipes.map((recipe) => {
          return (
            <Card
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              summary={recipe.summary}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
