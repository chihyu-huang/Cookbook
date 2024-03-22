import axios from "axios";

const API_URL = "http://localhost:8080/api/recipes";

class RecipeService {
    // Retrieve all recipes
    getRecipes() {
        return axios.get(API_URL);
    }

    // Add a new recipe
    addRecipe(recipe) {
        return axios.post(API_URL, recipe);
    }

    // Retrieve a single recipe by its ID
    getRecipeById(recipeId) {
        return axios.get(`${API_URL}/${recipeId}`);
    }

    // Update a recipe by its ID
    updateRecipe(recipeId, updatedRecipe) {
        return axios.put(`${API_URL}/${recipeId}`, updatedRecipe);
    }

    // Delete a recipe by its ID
    deleteRecipe(recipeId) {
        return axios.delete(`${API_URL}/${recipeId}`);
    }
}

export default new RecipeService();
