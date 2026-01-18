// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '2px solid #333',
      padding: '20px',
      width: '250px',
      margin: '20px auto',
      textAlign: 'center',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '18px', margin: '15px 0' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
