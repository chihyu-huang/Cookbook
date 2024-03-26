package com.example.controller;

import com.example.exception.ResourceNotFoundException;
import com.example.repository.RecipeRepository;
import com.example.repository.IngredientRepository;
import com.example.model.Recipe;
import com.example.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @GetMapping("{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable long id) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not exist with id: " + id));
        return ResponseEntity.ok(recipe);
    }

    @PutMapping("{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable long id, @RequestBody Recipe recipeDetails) {
        Recipe updateRecipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not exist with id: " + id));

        // Update recipe properties
        updateRecipe.setName(recipeDetails.getName());
        updateRecipe.setDescription(recipeDetails.getDescription());
        updateRecipe.setTimeRequired(recipeDetails.getTimeRequired());
        updateRecipe.setMealType(recipeDetails.getMealType());

        // Update existing ingredients and add new ingredients
        List<Ingredient> updatedIngredients = new ArrayList<>();
        for (Ingredient ingredient : recipeDetails.getIngredients()) {
            if (ingredient.getIngredient_id() != 0) {
                // Existing ingredient - Update properties
                Ingredient existingIngredient = updateRecipe.getIngredients()
                        .stream()
                        .filter(i -> i.getIngredient_id() == ingredient.getIngredient_id())
                        .findFirst()
                        .orElseThrow(() -> new ResourceNotFoundException("Ingredient not found with id: " + ingredient.getIngredient_id()));
                existingIngredient.setName(ingredient.getName());
                existingIngredient.setAmount(ingredient.getAmount());
                updatedIngredients.add(existingIngredient);
            } else {
                // New ingredient - Save it and add to the list
                ingredient.setRecipe(updateRecipe); // Set the recipe for the new ingredient
                updatedIngredients.add(ingredientRepository.save(ingredient));
            }
        }
        updateRecipe.setIngredients(updatedIngredients);


        // Save the updated recipe
        Recipe savedRecipe = recipeRepository.save(updateRecipe);

        return ResponseEntity.ok(savedRecipe);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRecipe(@PathVariable long id) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not exist with id: " + id));

        recipeRepository.delete(recipe);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
