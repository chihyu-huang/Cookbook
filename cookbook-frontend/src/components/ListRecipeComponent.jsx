// import React, {  useState, useEffect } from 'react'
import React, {  useState } from 'react'
import RecipeService from '../services/RecipeService'

const ListRecipeComponent = () => {

    const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     getAllRecipes();
    // }, [])

    // const getAllRecipes = () => {
    //     RecipeService.getRecipes().then((response) => {
    //         setRecipes(response.data)
    //         console.log(response.data);
    //     }).catch((error) => {
    //         console.log(error); 
    //     })
    // }


    return (
        <div className='container'>
            <h2 className='text-center'>Recipes</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Description</th>
                        <th>Time Required</th>
                        <th>Meal Type</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    recipes.map( 
                        recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>  
                            <td>{recipe.timeRequired}</td>
                            <td>{recipe.mealType}</td>
                            <td>{recipe.ingredients}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default ListRecipeComponent
