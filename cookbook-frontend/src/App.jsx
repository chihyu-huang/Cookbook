
import { useEffect } from 'react';
import './App.css'
import ListRecipeComponent from './components/ListRecipeComponent';

function App() {

  useEffect(() => {
    document.title = "Recipe App"
  })

  return(
    <div  className= "container" >
      <ListRecipeComponent />
    </div>
  )
}

export default App
