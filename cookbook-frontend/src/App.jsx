import React from 'react';

import './App.css'
import ListRecipeComponent from './components/ListRecipeComponent';
import RecipeDetailsComponent from './components/RecipeDetailsComponent';
import HeaderComponent from './components/HeaderComponent';
import AddRecipeForm from './components/AddRecipeForm';

// const routes = createBrowserRouter ([
//   { path: '/', element: <ListRecipeComponent /> },
//   { path: '/recipes', element: <ListRecipeComponent /> },
//   { path: '/recipes/:id', element: <RecipeDetailsComponent /> },
//   { path: '/add-recipe', element: <AddRecipeForm /> },
// ]);


function App() {
  return (
    <React.StrictMode>

      <ListRecipeComponent />
      {/* <RouterProvider router={router}/> */}
    </React.StrictMode>
  );
}

export default App;
