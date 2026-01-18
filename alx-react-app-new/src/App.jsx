// App.jsx
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Yousra" age={29} bio="I love traveling and coding!" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;