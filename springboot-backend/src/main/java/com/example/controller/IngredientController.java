package com.example.controller;

import com.example.exception.ResourceNotFoundException;
import com.example.repository.IngredientRepository;
import com.example.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = {"http://localhost:3000/"})
//@CrossOrigin("*")
@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    @PostMapping
    public Ingredient createIngredient(@RequestBody Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    @GetMapping("{id}")
    public ResponseEntity<Ingredient> getIngredientById(@PathVariable long id) {
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ingredient not found with id: " + id));
        return ResponseEntity.ok(ingredient);
    }

    @PutMapping("{id}")
    public ResponseEntity<Ingredient> updateIngredient(@PathVariable long id, @RequestBody Ingredient ingredientDetails) {
        Ingredient updateIngredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ingredient not found with id: " + id));

        updateIngredient.setName(ingredientDetails.getName());
        updateIngredient.setAmount(ingredientDetails.getAmount());
        // You may include other properties to update as needed

        ingredientRepository.save(updateIngredient);

        return ResponseEntity.ok(updateIngredient);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteIngredient(@PathVariable long id) {
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ingredient not found with id: " + id));

        ingredientRepository.delete(ingredient);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
