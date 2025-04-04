import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';  // Adjust the path if needed
import RecipeList from './components/RecipeList';  // Adjust the path if needed

function App() {
    return (
        <div>
            <h1>Recipe App</h1>
            <AddRecipeForm />
            <RecipeList />
        </div>
    );
}

export default App;
