// MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main style={{
      backgroundColor: '#f0f8ff',
      padding: '20px',
      margin: '15px',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#333' }}>Welcome to my city guide!</h2>
      <p style={{ lineHeight: '1.6' }}>
        Explore various cities and discover hidden gems, cultural spots, and amazing food!
      </p>
    </main>
  );
};

export default MainContent;