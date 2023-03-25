import React, { useState } from "react";

const UseStateBasic = () => {
  const [count, setCount] = useState(0);

  const handleCurrentCount = (num) => {
    setCount((currentCount) => {
      return currentCount + num;
    });
  };

  // let count = 0;

  // const handleCurrentCount = (num) => {
  //   if (num === -1) {
  //     count = count - 1;
  //   }
  //   if (num === +1) {
  //     count = count + 1;
  //   }
  // };

  return (
    <div>
      <div>
        <button onClick={() => handleCurrentCount(-1)}>-</button>
        <button onClick={() => handleCurrentCount(+1)}>+</button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default UseStateBasic;
