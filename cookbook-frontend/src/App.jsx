import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import ListRecipeComponent from './components/ListRecipeComponent';
import RecipeDetailsComponent from './components/RecipeDetailsComponent';
import HeaderComponent from './components/HeaderComponent';
import AddRecipeForm from './components/AddRecipeForm';
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

const routes = createBrowserRouter([
  { path: '/', element: <ListRecipeComponent /> },
  { path: '/recipes', element: <ListRecipeComponent /> },
  { path: '/recipes/:id', element: <RecipeDetailsComponent /> },
  { path: '/add-recipe', element: <AddRecipeForm /> },
  { path: '/edit-recipe/:id', element: <AddRecipeForm /> },
  { path: '/recipes/:id', element: <SearchResultsList /> },
]);

function App() {
  const [results, setResults] = useState([]);
  
  return (
    <React.StrictMode>
      <HeaderComponent />
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
