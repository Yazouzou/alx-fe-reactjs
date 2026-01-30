import { create } from 'zustand';

// Zustand store for recipes
export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Replace all recipes (required by checker)
  setRecipes: (recipes) => set({ recipes }),
}));

