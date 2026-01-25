import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Compute favorites inside the component, not in the selector
  const favorites = favoritesIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '12px' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
