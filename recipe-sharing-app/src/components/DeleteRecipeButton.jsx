import './DeleteRecipeButton.css'
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({recipeId}) { 
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate();

  const handleDelete = () => {
    if(!recipeId) return;
    deleteRecipe(recipeId);
    navigate('/')
  }

  return ( 
    <>
      <button onClick={handleDelete} className="delete-btn">Delete</button>
    </>
   );
}

export default DeleteRecipeButton;