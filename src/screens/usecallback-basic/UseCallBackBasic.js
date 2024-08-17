import React, { useCallback, useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const UseCallBackBasic = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // const increment1 = () => {
  //   setCount1((prev) => prev + 1);
  // };
  // const increment2 = () => {
  //   setCount2((prev) => prev + 1);
  // };
  const increment1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, [count1]);
  const increment2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, [count2]);
  // 1.エクスポートするときにReact.memoでラッピングすることでステートに変更がないとレンダリングされなくなる
  // 2.しかし同じコンポーネントが複数あってpropsで使い分けているケースでは不要なレンダリングは引き続き起こる(nofunctionの部分)
  // 3.依存するpropsに変更があった時のみレンダリングさせるためにuseCallbackが必要になった
  return (
    <div>
      <Title />
      <Button handleFunction={increment1}>No.1</Button>
      <Count count={count1} />
      <Button handleFunction={increment2}>No.2</Button>
      <Count count={count2} />
    </div>
  );
};

export default UseCallBackBasic;
