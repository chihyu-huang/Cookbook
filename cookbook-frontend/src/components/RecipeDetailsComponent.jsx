// RecipeDetailsComponent.jsx

import React from 'react';

const RecipeDetailsComponent = ({ recipe }) => {
    return (
        <div>
            <h2>Recipe Details</h2>
            <p><strong>Name:</strong> {recipe.name}</p>
            <p><strong>Description:</strong> {recipe.description}</p>
            <p><strong>Time Required:</strong> {recipe.timeRequired}</p>
            <p><strong>Meal Type:</strong> {recipe.mealType}</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.ingredient_id}>
                        {ingredient.name} - {ingredient.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetailsComponent;
