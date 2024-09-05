import React, { useState } from 'react';
import CustomHook from './CustomHook';

const CounterTwo = () => {
  // 初期値と変更値を変更することも可能
  const [count, increment, decrement, reset] = CustomHook(10, 2);
  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default CounterTwo;
