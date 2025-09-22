import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(persist(
  (set) => ({
  /////state//////
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  //////actions/////
  
  // add recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]

  })),
  setRecipes: (recipes) => set({ recipes }),

  //  deleteRecipe  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => (recipe.id !== recipeId))
  })),

  // update recipe
  updateRecipe: (updated) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updated.id ? { ...recipe, ...updated } : recipe
    )
  })),

  // search recipe
  setSearchTerm: (term) => set({
    searchTerm: term
  }),

  // filter recipe
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.trim().toLowerCase().includes(state.searchTerm.trim().toLowerCase())
    )
  }))

})
));

export default useRecipeStore