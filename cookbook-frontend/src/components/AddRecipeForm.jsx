import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RecipeService from '../services/RecipeService';

const AddRecipeForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [timeRequired, setTimeRequired] = useState('');
    const [mealType, setMealType] = useState('');
    const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleIngredientChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...ingredients];
        list[index][name] = value;
        setIngredients(list);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', amount: '' }]);
    };

    
    const handleRemoveIngredient = (index) => {
        console.log("Removing ingredient at index:", index);
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        console.log("Updated ingredients:", updatedIngredients);
        setIngredients(updatedIngredients);
    };
    
    
    

    const saveOrUpdateRecipe = (e) => {
        e.preventDefault();
        const recipe = { name, description, timeRequired, ingredients, mealType };

        if (id) {
            RecipeService.updateRecipe(id, recipe)
                .then(() => {
                    navigate(`/recipes/${id}`);
                    console.log('Recipe updated successfully', recipe);
                    
                })
                .catch(error => {
                    console.log('Error updating recipe:', error);
                    // Display error message to the user
                    alert('Failed to update recipe. Please try again later.');
                
                });
        } else {
            RecipeService.addRecipe(recipe)
                .then(() => {
                    navigate('/recipes');
                })
                .catch(error => {
                    console.log('Error adding recipe:', error);
                    // Display error message to the user
                    alert('Failed to add recipe. Please try again later.');
                
                });
        }
    };

    useEffect(() => {
        if (id) {
            RecipeService.getRecipeById(id)
                .then(response => {
                    const { name, description, timeRequired, mealType, ingredients } = response.data;
                    setName(name);
                    setDescription(description);
                    setTimeRequired(timeRequired);
                    setMealType(mealType);
                    setIngredients(ingredients);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const title = () => {
        return id ? <h2 className='text-center'>Update Recipe</h2> : <h2 className='text-center'>Add Recipe</h2>;
    };

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Description:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        name='description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Time Required (minutes):</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='timeRequired'
                                        placeholder="Time Required"
                                        value={timeRequired}
                                        onChange={(e) => {
                                            const input = e.target.value;
                                            // Validate if input is a number
                                            if (!isNaN(input)) {
                                                setTimeRequired(input);
                                            }
                                        }}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Ingredients:</label>
                                    {ingredients.map((ingredient, index) => (
                                        <div key={index} className="ingredient-row">
                                            <input
                                                type="text"
                                                className="form-control mr-2"
                                                placeholder="Ingredient Name"
                                                name="name"
                                                value={ingredient.name || ''}
                                                onChange={(event) => handleIngredientChange(index, event)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                className="form-control mr-2"
                                                placeholder="Amount"
                                                name="amount"
                                                value={ingredient.amount || ''}
                                                onChange={(event) => handleIngredientChange(index, event)}
                                                required
                                            />
                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => handleRemoveIngredient(index)}
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-primary" onClick={handleAddIngredient}>
                                        Add Ingredient
                                    </button>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Meal Type:</label>
                                    <select
                                        className="form-control"
                                        name='mealType'
                                        value={mealType}
                                        onChange={(e) => setMealType(e.target.value)}
                                    >
                                        <option value="">Select Meal Type</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                        <option value="dinner">Dessert</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <div>
                                        <button className="btn btn-success" onClick={saveOrUpdateRecipe}>
                                            {id ? 'Update Recipe' : 'Add Recipe'}
                                        </button>
                                        <Link to={id ? `/recipes/${id}` : '/recipes'} className="btn btn-danger">Cancel</Link>
                                    </div>
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRecipeForm;
