import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import ListRecipeComponent from './components/ListRecipeComponent';
import RecipeDetailsComponent from './components/RecipeDetailsComponent';
import HeaderComponent from './components/HeaderComponent';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListRecipeComponent />} />
        <Route path="/recipes" element={<ListRecipeComponent />} />
        <Route path="/recipes/:id" element={<RecipeDetailsComponent />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
