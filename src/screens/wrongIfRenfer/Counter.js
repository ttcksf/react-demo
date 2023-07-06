import React, { useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setCount((current) => current + 1)}>+</button>
      <button onClick={() => setCount((current) => current - 1)}>-</button>
      <p>現在の数字は{count}です</p>
    </div>
  );
};

export default Counter;
