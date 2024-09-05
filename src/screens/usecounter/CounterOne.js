import React, { useState } from 'react';
import CustomHook from './CustomHook';

const CounterOne = () => {
  const [count, increment, decrement, reset] = CustomHook(0, 1);
  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default CounterOne;
