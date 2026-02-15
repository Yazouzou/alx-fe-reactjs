import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      validationErrors.ingredients =
        "Please include at least two ingredients (comma separated)";
    }

    if (!steps.trim()) {
      validationErrors.steps = "Preparation steps are required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Recipe Submitted:", {
        title,
        ingredients,
        steps,
      });

      alert("Recipe submitted successfully!");

      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-2 font-medium">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block mb-2 font-medium">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="4"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">
                {errors.steps}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
