import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [], // Initialize as empty array
    searchTerm: '',
    filteredRecipes: [],
    favorites: [], // Array to store favorite recipe IDs
    recommendations: [],

    // ✅ Add setRecipes
    setRecipes: (newRecipes) => set({ recipes: newRecipes }),

    // ✅ Add addRecipe
    addRecipe: (recipe) =>
        set((state) => ({
            recipes: [...state.recipes, recipe],
        })),

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) => {
                const searchTerm = state.searchTerm.toLowerCase();
                return (
                    recipe.title.toLowerCase().includes(searchTerm) ||
                    recipe.ingredients.some((ingredient) =>
                        ingredient.toLowerCase().includes(searchTerm)
                    )
                );
            }),
        })),

    addFavorite: (recipeId) =>
        set((state) => ({
            favorites: [...state.favorites, recipeId],
