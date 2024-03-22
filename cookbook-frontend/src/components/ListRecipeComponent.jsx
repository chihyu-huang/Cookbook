import React, { useState, useEffect } from 'react';
import RecipeService from '../services/RecipeService';
import { Link } from 'react-router-dom';

const ListRecipeComponent = () => {
    const [recipes, setRecipes] = useState([]);

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

    return (
        <div className='container'>
            <h2 className='text-center'>Recipes</h2>
            <Link to='/add-recipe' className='btn btn-primary'>Add Recipe</Link>
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
                        <tr key={recipe.id}>
                            <td><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></td>
                            <td>{recipe.description}</td>
                            <td>{recipe.timeRequired}</td>
                            <td>{recipe.mealType}</td>
                            <td>
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
        </div>
    );
};

export default ListRecipeComponent;
