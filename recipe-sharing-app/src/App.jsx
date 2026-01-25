import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
        {/* Show favorites and recommendations below */}
        <FavoritesList />
        <RecommendationsList />
      </div>
    </BrowserRouter>
  );
}

export default App;
