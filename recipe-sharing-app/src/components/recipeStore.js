import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [], // Initial empty array
    searchTerm: '',
    filteredRecipes: [],
    favorites: [], // Array to store favorite recipe IDs
    recommendations: [],

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
        })),

    removeFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
        })),

    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) =>
                    !state.favorites.includes(recipe.id) &&
                    Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),

    // New methods
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),

    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),

    deleteRecipe: (recipeId) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
        })),
}));



