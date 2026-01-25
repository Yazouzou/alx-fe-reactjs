import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta dish',
      ingredients: ['spaghetti', 'beef', 'tomato'],
      prepTime: 30,
    },
    {
      id: '2',
      title: 'Chicken Curry',
      description: 'Spicy and creamy chicken curry',
      ingredients: ['chicken', 'curry powder', 'coconut milk'],
      prepTime: 45,
    },
    // Add more sample recipes if needed
  ],

  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Simple recommendation logic: recipes NOT in favorites, random selection
    const recommended = recipes.filter((r) => !favorites.includes(r.id));
    return set({ recommendations: recommended.slice(0, 3) }); // top 3 recommendations
  },

  // Optional: filteredRecipes logic (search + filter)
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    const lowerTerm = searchTerm.toLowerCase();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(lowerTerm) ||
        r.description.toLowerCase().includes(lowerTerm) ||
        r.ingredients.some((i) => i.toLowerCase().includes(lowerTerm))
    );
  },

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}));
