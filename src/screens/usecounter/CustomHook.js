import React, { useState } from 'react';

const CustomHook = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + value);
  };
  const decrement = () => {
    setCount((prev) => prev - value);
  };
  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};

export default CustomHook;
