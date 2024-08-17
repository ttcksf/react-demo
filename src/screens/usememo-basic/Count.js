import React, { useMemo, useState } from 'react';

const Count = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increament1 = () => {
    setCount1((prev) => prev + 1);
  };
  const increament2 = () => {
    setCount2((prev) => prev + 1);
  };
  // const isEven1 = () => {
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }
  //   return count1 % 2 === 0;
  // };
  const isEven1 = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);
  const isEven2 = () => {
    return count2 % 2 === 0;
  };
  // 1.レンダリングは走るたびに関数1と関数2は常に走る構造
  // 2.関数2を実行するだけだとしてもCount.js自体はレンダリング走るため関数1の実行も再度実行される(count1が偶数か再計算)
  // 3.useMemoが記憶の有無を確認するためtrue/falseを返すものなので関数2を実行しても関数1は実行されるものでは無くなった
  // （関数1を単体で実行すると時間がかかるのは同じ）
  return (
    <div>
      <button onClick={increament1}>No.1:</button>
      {count1}
      {/* <span>は{isEven1() ? '偶数' : '奇数'}です</span> */}
      {/* useMemoはtrue/falseなので関数型を外して使う */}
      <span>は{isEven1 ? '偶数' : '奇数'}です</span>
      <br />
      <button onClick={increament2}>No.2:</button>
      {count2}
      <span>は{isEven2() ? '偶数' : '奇数'}です</span>
    </div>
  );
};

export default Count;
