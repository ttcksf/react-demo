import React, { useState } from "react";
import CounterCom from "../components/CounterCom";

const Counter = () => {
  //状態管理は同じコンポーネント内で独立して管理すべき
  //そうでないとコンポーネントのメリットである「使い回し」ができなくなる

  // const [count, setCount] = useState(0);
  // return <CounterCom count={count} setCount={setCount} />;

  return (
    <>
      <CounterCom />
      <CounterCom />
    </>
  );
};

export default Counter;
