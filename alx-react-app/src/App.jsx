import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile"; // if used
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
