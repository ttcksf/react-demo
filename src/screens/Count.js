import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  console.log(
    `%c${count} %ctest`,
    "font-weight: bold; color: red;",
    "color: blue;"
  );
  //コピペするとステート関数同士で衝突して正常に動作しない
  //関数型でreturnで変数を返してステートを更新すると正常に動く
  //簡単なものでは気にしなくて良いが、基本的な考えは持っておくべき
  const handleCount = async (num) => {
    setCount(count + num);
    setCount(count + num);
  };

  const handleCurrentCount = (num) => {
    setCount((currentCount) => {
      return currentCount + num;
    });
    setCount((currentCount) => {
      return currentCount + num;
    });
  };

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

export default Count;
