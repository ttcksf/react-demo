import React, { useState } from 'react';

const Counter = ({ role }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{role}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {count}
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
