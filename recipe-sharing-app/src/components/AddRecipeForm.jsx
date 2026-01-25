import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: uuidv4(),
      title,
      description,
      ingredients: ingredients.split(',').map((i) => i.trim()),
      prepTime: Number(prepTime),
    });
    setTitle('');
    setDescription('');
    setIngredients('');
    setPrepTime('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add New Recipe</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <br />
      <input
        type="number"
        placeholder="Preparation time (minutes)"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
