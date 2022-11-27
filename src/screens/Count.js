import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  //コピペするとステート関数同士で衝突して正常に動作しない
  //関数型でreturnで変数を返してステートを更新すると正常に動く
  //簡単なものでは気にしなくて良いが、基本的な考えは持っておくべき
  const handleCount1 = (num) => {
    setCount(count + num);
    setCount(count + num);
  };
  const handleCount2 = (num) => {
    setCount(count + num);
  };

  const handleCurrentCount1 = (num) => {
    setCount((currentCount) => {
      return currentCount + num;
    });
    setCount((currentCount) => {
      return currentCount + num;
    });
  };
  const handleCurrentCount2 = (num) => {
    setCount((currentCount) => {
      return currentCount + num;
    });
  };
  return (
    <div>
      <div>
        <button onClick={() => handleCurrentCount1(-1)}>-</button>
        <button onClick={() => handleCurrentCount1(+1)}>+</button>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => handleCurrentCount2(-1)}>-</button>
        <button onClick={() => handleCurrentCount2(+1)}>+</button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Count;
