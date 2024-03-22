

// import React, {useState, useEffect} from 'react'
// import {Link, useHistory, useParams } from 'react-router-dom';
// import RecipeService from '../services/RecipeService';


// const AddRecipeForm = ({ onAdd }) => {

//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')
//     const [timeRequired, setTimeRequired] = useState('')
//     const [mealType, setMealType] = useState('')
//     const [ingredients, setIngredients] = useState([])
//     const history = useHistory();
//     const {id} = useParams();


//       const saveOrUpdateRecipe = (e) => {
//         e.preventDefault();

//         const recipe = {name, description, timeRequired, mealType, ingredients}

//         if(id){
//             RecipeService.updateRecipe(id, recipe)
//             .then(response => {
//                 history.push('/recipes')
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         }else{
//             RecipeService.addRecipe(recipe)
//             .then(response => {
//                 console.log(response.data)
//                 history.push('/recipes')
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         }
//       }

//       useEffect(() => {
//             RecipeService.getRecipeById(id)
//             .then(response => {
//                 setName(recipe.data.name)
//                 setDescription(recipe.data.description)
//                 setTimeRequired(recipe.data.timeRequired)
//                 setMealType(recipe.data.mealType)
//                 setIngredients(recipe.data.ingredients)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//       },[])

//       const title = () => {
//           if(id){
//               return <h2 className='text-center'>Update Recipe</h2>
//           }else{
//               return <h2 className='text-center'>Add Recipe</h2>
//           }
      
//       }

//       return (
        
//         <div>
//           <br />
//           <div className="container">
//             <div className="row">
//               <div className="card col-md-6 offset-md-3 offset-md-3">
//                 {
//                   title()
//                 }
//                 <div className="card-body">
//                   <form>
//                     <div className="form-group mb-2">
//                       <label className="form-label"></label>
//                       <input 
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                        />
//                     </div>

//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       );


// };



// AddRecipeForm.jsx
import React, { useState } from 'react';
import RecipeService from '../services/RecipeService';

const AddRecipeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    timeRequired: '',
    mealType: '',
    ingredients: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RecipeService.addRecipe(formData);
      onAdd(response.data); // Add the new recipe to the list
      // Reset the form
      setFormData({
        name: '',
        description: '',
        timeRequired: '',
        mealType: '',
        ingredients: [],
      });
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  // Render the form with input fields for recipe details

  return (
    <div className='container'>
      <h2 className='text-center'>Add A New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Recipe Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='form-control'
            required
          />
        </div>
        <div className='form-group'>
          <label>Description:</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='form-control'
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label>Time Required:</label>
          <input
            type='text'
            name='timeRequired'
            value={formData.timeRequired}
            onChange={handleInputChange}
            className='form-control'
            required
          />
        </div>
        <div className='form-group'>
          <label>Meal Type:</label>
          <input
            type='text'
            name='mealType'
            value={formData.mealType}
            onChange={handleInputChange}
            className='form-control'
            required
          />
        </div>
        <br></br>
        <button type='submit' className='btn btn-success' onClick={(e) => handleSubmit(e)}>
          Add Recipe
        </button>
      </form>
    </div>
  );
  
};

export default AddRecipeForm;
