import Search from "./components/Search";
import { useState } from "react";

function App() {
  console.log(import.meta.env.VITE_APP_GITHUB_API_KEY);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          GitHub User Search
        </h1>

        <Search />
      </div>
    </div>
  );
}

export default App;
