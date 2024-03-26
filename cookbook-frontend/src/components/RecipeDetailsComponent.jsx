import React, { useState, useEffect } from 'react';
import RecipeService from '../services/RecipeService';
import { useParams, Link } from 'react-router-dom';

const RecipeDetailsComponent = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        RecipeService.getRecipeById(id)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipe details:', error);
            });
    }, [id]);

    const deleteRecipe = (id) => {
        console.log("Deleting recipe with ID:", id);
    };


    if (!recipe) {
        return (
            <div>
                This recipe does not exist.
                <br />
                <Link to="/recipes" className="btn btn-primary">Back to Recipes</Link>
            </div>
        );
    }
    

    return (
        <div className='container'>
            <h2>Recipe Details</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <Link className="btn btn-info" to={`/edit-recipe/${recipe.id}`}>Update</Link>
                            <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)} style={{ marginLeft: "10px" }}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Name:</th>
                        <td>{recipe.name}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{recipe.description}</td>
                    </tr>
                    <tr>
                        <th>Time Required:</th>
                        <td>{recipe.timeRequired}</td>
                    </tr>
                    <tr>
                        <th>Meal Type:</th>
                        <td>{recipe.mealType}</td>
                    </tr>
                    <tr>
                        <th>Ingredients:</th>
                        <td>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient.name} - {ingredient.amount}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/recipes" className="btn btn-primary">Back to Recipes</Link>
        </div>
    );
};

export default RecipeDetailsComponent;
