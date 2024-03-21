import React, { useState, useEffect } from 'react';
import RecipeService from '../services/RecipeService';
import RecipeDetailsComponent from './RecipeDetailsComponent'; // Import the details component
// import { Link } from 'react-router-dom';

const ListRecipeComponent = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // State to track selected recipe

    useEffect(() => {
        getAllRecipes();
    }, []);

    const getAllRecipes = () => {
        RecipeService.getRecipes()
            .then((response) => {
                setRecipes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Function to handle recipe click
    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div className='container'>
            <h2 className='text-center'>Recipes</h2>
            
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Description</th>
                        <th>Time Required</th>
                        <th>Meal Type</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
                            {/* Attach click event handler */}
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>
                            <td>{recipe.timeRequired}</td>
                            <td>{recipe.mealType}</td>
                            <td>
                                {/* Render ingredients as a list */}
                                <ul>
                                    {recipe.ingredients.map((ingredient) => (
                                        <li key={ingredient.ingredient_id}>
                                            {ingredient.name} - {ingredient.amount}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Render RecipeDetailsComponent if a recipe is selected */}
            {selectedRecipe && <RecipeDetailsComponent recipe={selectedRecipe} />}
        </div>
    );
};

export default ListRecipeComponent;
