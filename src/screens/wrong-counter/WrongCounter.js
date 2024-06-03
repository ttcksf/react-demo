import React, { useState } from 'react';
import Counter from './Counter';

const WrongCounter = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      {/* ReactはDOMの配置で差分をとっているためpropsの変化ではレンダリングが走らない */}
      {/* <p><Counter/></p>のようにしてマークアップで違いを作るとわかりやすい */}
      {/* key属性をつけることで違いを判断できるようになる */}
      {isAdmin ? (
        <Counter role="Admin" key="admin" />
      ) : (
        <Counter role="staff" key="staff" />
      )}
      <button onClick={() => setIsAdmin((prev) => !prev)}>スイッチ</button>
    </div>
  );
};

export default WrongCounter;
