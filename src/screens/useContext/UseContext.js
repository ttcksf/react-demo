import React, { createContext, useState } from 'react';
import ChildComp from './ChildComp';

export const CounterContext = createContext();
const UseContext = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount((prev) => prev + 1);
  };
  const minusCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CounterContext.Provider value={count}>
      <div>
        <button onClick={plusCount}>+</button>
        {/* {count} */}
        {/* <ChildComp count={count} /> */}
        <ChildComp />
        <button onClick={minusCount}>-</button>
      </div>
    </CounterContext.Provider>
  );
};
export default UseContext;
