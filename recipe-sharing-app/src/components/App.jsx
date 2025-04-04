// Import necessary libraries and components
import React from "react";
import AddRecipeForm from "./pages/AddRecipeForm";  // Import the AddRecipeForm component
import RecipeList from "./pages/RecipeList";        // Import the RecipeList component

function App() {
    return (
        <div>
            <h1>Recipe App</h1>
            <AddRecipeForm />  {/* Render the AddRecipeForm component */}
            <RecipeList />     {/* Render the RecipeList component */}
        </div>
    );
}

export default App;
