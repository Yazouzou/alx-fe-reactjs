import Search from "./components/Search";
import { useState } from 'react';

function App() {
  console.log(import.meta.env.VITE_APP_GITHUB_API_KEY);

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1>GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
