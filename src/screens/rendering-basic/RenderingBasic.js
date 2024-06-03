import React, { useState } from 'react';
import Child from './Child';
import Title from './Title';
import NewDate from './NewDate';

const RenderingBasic = () => {
  // 親がレンダリングされると変更がなくても子供もレンダリングされる
  // propsの有無は関係ない
  // どこがレンダリングされているのか、されないのか確認することが大事（useEffectを使って制御するなどに繋がる）
  console.count('レンダリング');
  const [count, setCount] = useState(0);
  return (
    <div>
      <Title />
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {/* {count} */}
      <Child count={count} />
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <NewDate />
    </div>
  );
};

export default RenderingBasic;
