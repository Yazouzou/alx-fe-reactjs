import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  if (!recipe) return null; // Safety check

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Local state for form inputs
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    updateRecipe({ ...recipe, title, description });
    alert('Recipe updated successfully!'); // Optional feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        required
      />

      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
