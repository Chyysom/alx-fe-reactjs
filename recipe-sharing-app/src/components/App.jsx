

import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";  // Correct path to AddRecipeForm component
import RecipeList from "./components/RecipeList";        // Correct path to RecipeList component

function App() {
    return (
        <div>
            <h1>Recipe App</h1>
            <AddRecipeForm />  {/* Add the form component */}
            <RecipeList />     {/* Add the list component */}
        </div>
    );
}

export default App;
