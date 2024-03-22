import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import ListRecipeComponent from './components/ListRecipeComponent';
import RecipeDetailsComponent from './components/RecipeDetailsComponent';
import HeaderComponent from './components/HeaderComponent';
import AddRecipeForm from './components/AddRecipeForm';



const routes = createBrowserRouter([
  { path: '/', element: <ListRecipeComponent /> },
  { path: '/recipes', element: <ListRecipeComponent /> },
  { path: '/recipes/:id', element: <RecipeDetailsComponent /> },
  { path: '/add-recipe', element: <AddRecipeForm /> },
]);

function App() {
  return (
      <React.StrictMode>
        <HeaderComponent />
        <RouterProvider router={routes}></RouterProvider>
      </React.StrictMode>
  );
}



export default App;
