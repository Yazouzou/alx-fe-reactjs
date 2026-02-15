import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="flex justify-center mb-6">
      <Link
       to="/add"
       className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
      >
      Add New Recipe
      </Link>
     </div>


        <Link
          to="/"
          className="inline-block mt-6 text-blue-500 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
