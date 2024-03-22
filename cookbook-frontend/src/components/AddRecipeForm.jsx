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
};

export default AddRecipeForm;
