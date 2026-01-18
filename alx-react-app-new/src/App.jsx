// App.jsx
import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Alice" age={25} bio="I love traveling and coding!" />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;