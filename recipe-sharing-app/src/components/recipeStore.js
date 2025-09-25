import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(persist(
  (set) => ({
    /////state//////
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    favorites: [],

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
        recipe.title.trim().toLowerCase().includes(state.searchTerm.trim().toLowerCase()) ||  recipe.description.trim().toLowerCase().includes(state.searchTerm.trim().toLowerCase()) 
      )
    })),


    addFavorite: (recipeId) => set(state => ({
      favorites: [...state.favorites, recipeId]
 
    })),

    //remove favorite 
    removeFavorite: (recipeId) => set((state) => ({
      favorites: state.favorites.filter(id => (id !== recipeId))
    })),

  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  })
));

export default useRecipeStore