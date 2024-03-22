import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RecipeService from '../services/RecipeService';

const AddRecipeForm = ({ onAdd }) => {
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
        const list = [...ingredients];
        list.splice(index, 1);
        setIngredients(list);
    };

    const saveOrUpdateRecipe = (e) => {
        e.preventDefault();
        const recipe = { name, description, timeRequired, mealType, ingredients };

        if (id) {
            RecipeService.updateRecipe(id, recipe)
                .then(() => {
                    navigate.push('/recipes');
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            RecipeService.addRecipe(recipe)
                .then(() => {
                    navigate.push('/recipes');
                })
                .catch(error => {
                    console.log(error);
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
    }, []);

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
                                                value={ingredient.name}
                                                onChange={(event) => handleIngredientChange(index, event)}
                                            />
                                            <input
                                                type="text"
                                                className="form-control mr-2"
                                                placeholder="Amount"
                                                name="amount"
                                                value={ingredient.amount}
                                                onChange={(event) => handleIngredientChange(index, event)}
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
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button className="btn btn-success" onClick = { (e) => saveOrUpdateRecipe(e) }>
                                    {id ? 'Update Recipe' : 'Add Recipe'}
                                </button>
                                <Link to="/recipes" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRecipeForm;






// AddRecipeForm.jsx
// import React, { useState } from 'react';
// import RecipeService from '../services/RecipeService';

// const AddRecipeForm = ({ onAdd }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     timeRequired: '',
//     mealType: '',
//     ingredients: [],
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await RecipeService.addRecipe(formData);
//       onAdd(response.data); // Add the new recipe to the list
//       // Reset the form
//       setFormData({
//         name: '',
//         description: '',
//         timeRequired: '',
//         mealType: '',
//         ingredients: [],
//       });
//     } catch (error) {
//       console.error('Error adding recipe:', error);
//     }
//   };

//   // Render the form with input fields for recipe details

//   return (
//     <div className='container'>
//       <h2 className='text-center'>Add A New Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='form-group'>
//           <label>Recipe Name:</label>
//           <input
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleInputChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label>Description:</label>
//           <textarea
//             name='description'
//             value={formData.description}
//             onChange={handleInputChange}
//             className='form-control'
//             required
//           ></textarea>
//         </div>
//         <div className='form-group'>
//           <label>Time Required:</label>
//           <input
//             type='text'
//             name='timeRequired'
//             value={formData.timeRequired}
//             onChange={handleInputChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label>Meal Type:</label>
//           <input
//             type='text'
//             name='mealType'
//             value={formData.mealType}
//             onChange={handleInputChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <br></br>
//         <button type='submit' className='btn btn-success' onClick={(e) => handleSubmit(e)}>
//           Add Recipe
//         </button>
//       </form>
//     </div>
//   );
  
// };

// export default AddRecipeForm;
