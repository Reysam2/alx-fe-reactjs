import './DeleteRecipeButton.css'
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({recipeId}) { 
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)

  return ( 
    <>
      <button onClick={() => recipeId &&deleteRecipe(recipeId)} className="delete-btn">Delete</button>
    </>
   );
}

export default DeleteRecipeButton;