package com.example;

import com.example.repository.RecipeRepository;
import com.example.model.Recipe;
import com.example.repository.IngredientRepository;
import com.example.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.Arrays;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private RecipeRepository recipeRepository;

	@Autowired
	private IngredientRepository ingredientRepository;

	@Override
	public void run(String... args) throws Exception {
//		// Recipe 1: Scrambled Eggs
//		Recipe scrambledEggs = new Recipe();
//		scrambledEggs.setName("Scrambled Eggs");
//		scrambledEggs.setDescription("Delicious and simple scrambled eggs recipe");
//		scrambledEggs.setTimeRequired("10 minutes");
//		scrambledEggs.setMealType("Breakfast");
//
//		// Ingredients for Scrambled Eggs
//		Ingredient egg = new Ingredient();
//		egg.setName("Eggs");
//		egg.setAmount("2");
//		egg.setRecipe(scrambledEggs);
//
//		Ingredient milk = new Ingredient();
//		milk.setName("Milk");
//		milk.setAmount("1 cup");
//		milk.setRecipe(scrambledEggs);
//
//		Ingredient salt = new Ingredient();
//		salt.setName("Salt");
//		salt.setAmount("1/4 tsp");
//		salt.setRecipe(scrambledEggs);
//
//		scrambledEggs.setIngredients(Arrays.asList(egg, milk, salt));
//		recipeRepository.save(scrambledEggs);
//
//		// Recipe 2: Pasta Carbonara
//		Recipe pastaCarbonara = new Recipe();
//		pastaCarbonara.setName("Pasta Carbonara");
//		pastaCarbonara.setDescription("Classic pasta carbonara recipe");
//		pastaCarbonara.setTimeRequired("30 minutes");
//		pastaCarbonara.setMealType("Dinner");
//
//		// Ingredients for Pasta Carbonara
//		Ingredient pasta = new Ingredient();
//		pasta.setName("Pasta");
//		pasta.setAmount("250g");
//		pasta.setRecipe(pastaCarbonara);
//
//		Ingredient bacon = new Ingredient();
//		bacon.setName("Bacon");
//		bacon.setAmount("200g");
//		bacon.setRecipe(pastaCarbonara);
//
//		Ingredient eggs = new Ingredient();
//		eggs.setName("Eggs");
//		eggs.setAmount("2");
//		eggs.setRecipe(pastaCarbonara);
//
//		pastaCarbonara.setIngredients(Arrays.asList(pasta, bacon, eggs));
//		recipeRepository.save(pastaCarbonara);

//		// Recipe 1: Grilled Chicken Salad
//		Recipe grilledChickenSalad = new Recipe();
//		grilledChickenSalad.setName("Grilled Chicken Salad");
//		grilledChickenSalad.setDescription("Healthy and delicious grilled chicken salad");
//		grilledChickenSalad.setTimeRequired("20 minutes");
//		grilledChickenSalad.setMealType("Lunch");
//
//// Ingredients for Grilled Chicken Salad
//		Ingredient chicken = new Ingredient();
//		chicken.setName("Chicken");
//		chicken.setAmount("200g");
//		chicken.setRecipe(grilledChickenSalad);
//
//		Ingredient lettuce = new Ingredient();
//		lettuce.setName("Lettuce");
//		lettuce.setAmount("1 head");
//		lettuce.setRecipe(grilledChickenSalad);
//
//		Ingredient tomato = new Ingredient();
//		tomato.setName("Tomato");
//		tomato.setAmount("2");
//		tomato.setRecipe(grilledChickenSalad);
//
//		grilledChickenSalad.setIngredients(Arrays.asList(chicken, lettuce, tomato));
//		recipeRepository.save(grilledChickenSalad);
//
//// Recipe 2: Chocolate Cake
//		Recipe chocolateCake = new Recipe();
//		chocolateCake.setName("Chocolate Cake");
//		chocolateCake.setDescription("Decadent chocolate cake with frosting");
//		chocolateCake.setTimeRequired("1 hour");
//		chocolateCake.setMealType("Dessert");
//
//// Ingredients for Chocolate Cake
//		Ingredient flour = new Ingredient();
//		flour.setName("Flour");
//		flour.setAmount("250g");
//		flour.setRecipe(chocolateCake);
//
//		Ingredient cocoaPowder = new Ingredient();
//		cocoaPowder.setName("Cocoa Powder");
//		cocoaPowder.setAmount("50g");
//		cocoaPowder.setRecipe(chocolateCake);
//
//		chocolateCake.setIngredients(Arrays.asList(flour, cocoaPowder));
//		recipeRepository.save(chocolateCake);


	}
}
