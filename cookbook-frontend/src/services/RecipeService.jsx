import axios from "axios";

const API_URL = "http://localhost:8080/api/recipes";


class RecipeService {
    getRecipes() {
        return axios.get(API_URL);
    }
}

export default new RecipeService();