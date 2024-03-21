package com.example.controller;

import com.example.exception.ResourceNotFoundException;
import com.example.repository.RecipeRepository;
import com.example.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("*")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping
    public List<Recipe> getAllRecipes(){
        return recipeRepository.findAll();
    }

    // build create recipe REST API
    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    // build get recipe by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable  long id){
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not exist with id:" + id));
        return ResponseEntity.ok(recipe);
    }

    // build update recipe REST API
    @PutMapping("{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable long id,@RequestBody Recipe recipeDetails) {
        Recipe updateRecipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not exist with id: " + id));

        updateRecipe.setName(recipeDetails.getName());
        updateRecipe.setDescription(recipeDetails.getDescription());
        updateRecipe.setTimeRequired(recipeDetails.getTimeRequired());
        updateRecipe.setIngredients(recipeDetails.getIngredients());
        updateRecipe.setMealType(recipeDetails.getMealType());

        recipeRepository.save(updateRecipe);

        return ResponseEntity.ok(updateRecipe);
    }

    // build delete recipe REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRecipe(@PathVariable long id){

        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not exist with id: " + id));

        recipeRepository.delete(recipe);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
