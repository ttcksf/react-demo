import React, { useContext } from 'react';
import { CounterContext } from './UseContext';

// propsで受け渡しや別のコンポーネントを中継する必要がない
// どこかを起点に渡すのではなくプロジェクト全体に保管されているようなもの（Reduxに近い）
// const ChildComp = ({ count }) => {
const ChildComp = () => {
  const count = useContext(CounterContext);
  return <div>{count}</div>;
};

export default ChildComp;
