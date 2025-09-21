import { create } from "zustand";

const useRecipeStore = create((set) => ({
  //state
  recipes: [],

  // actions
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]

  })),
  setRecipes: (recipes) => set({ recipes }),

  //  deleteRecipe  
  deleteRecipe: (recipeId) => set( (state) => ({
    recipes: state.recipes.filter(recipe => (recipe.id !== recipeId) )
  })),

  updateRecipe : (updated) => set((state) => ({
    recipes: state.recipes.map((recipe) => 
      recipe.id === updated.id? {...recipe, ...updated} : recipe 
    )
  }))
 
 
}))

export default useRecipeStore