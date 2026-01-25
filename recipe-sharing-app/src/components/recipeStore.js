import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish',
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
  ],

  searchTerm: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // Computed filtered recipes
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    const lowerTerm = searchTerm.toLowerCase();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(lowerTerm) ||
        r.description.toLowerCase().includes(lowerTerm) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(lowerTerm))
    );
  },
}));
