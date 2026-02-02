import Search from "./components/Search";
function App() {
  console.log(import.meta.env.VITE_APP_GITHUB_API_KEY);

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1>GitHub User Search
        className="text-4xl font-bold text-green-400"
        Tailwind is working 🚀
      </h1>
      <Search />
    </div>
  );
}

export default App;
