import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Favorite button */}
      <button
        onClick={() =>
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
        }
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
    </div>
  );
};

export default RecipeDetails;
