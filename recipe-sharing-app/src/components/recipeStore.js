


import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes:,
    searchTerm: '',
    filteredRecipes:,
    favorites:, // Array to store favorite recipe IDs
    recommendations:,

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
            // **This is a mock implementation.**
            // In a real app, you would use more sophisticated logic
            // based on user preferences, favorite ingredients, etc.
            const recommended = state.recipes.filter(
                (recipe) =>
                    !state.favorites.includes(recipe.id) && // Don't recommend already favorited recipes
                    Math.random() > 0.5 // Randomly select some recipes
            );
            return { recommendations: recommended };

            // ... your existing actions for adding, deleting, updating recipes
        }));



