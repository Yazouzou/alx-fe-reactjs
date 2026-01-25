import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate();

  // Find the recipe in Zustand store by ID
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  // Safety check
  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit form */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete button */}
      <DeleteRecipeButton
        recipeId={recipe.id}
        onDelete={() => navigate('/')}  // Redirect home after delete
      />
    </div>
  );
};

export default RecipeDetails;
