import './Counter.css';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(true);
  
  return (
    <div className="App">
      <button onClick={() => setCount(!count)}>Click me</button>
      {count && <div>You clicked the button!</div>}
      </div>
  );
}
      

export default Counter;