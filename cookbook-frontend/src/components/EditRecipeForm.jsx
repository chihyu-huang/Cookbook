// EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import RecipeService from '../services/RecipeService';

const EditRecipeForm = ({ recipeId, initialData, onUpdate }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

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
      const response = await RecipeService.updateRecipe(recipeId, formData);
      onUpdate(response.data); // Update the recipe in the list
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  // Render the form with input fields pre-filled with recipe details
};

export default EditRecipeForm;
