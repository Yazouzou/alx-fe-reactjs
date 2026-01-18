// MainContent.jsx
// src/components/MainContent.jsx
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
      <h2 style={{ color: '#333' }}>Welcome to my favorite cities!</h2>
      <p style={{ lineHeight: '1.6' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
};

export default MainContent;
