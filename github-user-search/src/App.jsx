import Search from "./components/Search";
function App() {
  console.log(import.meta.env.VITE_APP_GITHUB_API_KEY);

  return (
      <div>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
