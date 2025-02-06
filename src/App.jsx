import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './components/RecipePage';
import { useState } from 'react';

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState('');

  return <>
    {selectedRecipe != '' ? <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe}/> : <RecipeListPage clickFn={setSelectedRecipe}/>}
  </>;
};
