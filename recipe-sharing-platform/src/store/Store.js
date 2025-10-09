import { create } from "zustand";
import { persist } from "zustand/middleware";

const RecipeStore = create(persist((set) => ({
  // state
    userRecipes: [],


  // actions
  addRecipes: (recipe) => set((state) => ({userRecipes: [...state.userRecipes, recipe]} ))

 }),
   { name: "recipe-sharing-store",}
),
 
)

export default RecipeStore;