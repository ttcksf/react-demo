import React, { useMemo, useState } from 'react';

const initialItems = new Array(10000000).fill(0).map((_, index) => {
  return {
    id: index,
    // indexが最後になったらtrueを入れる
    isSelected: index === 9999999,
  };
});

const UseMemoAdvance = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(initialItems);
  // isSelectedがtrueのものを探して取り出しているが一番最後のindexになるため配列を中身を全て確認する作業になっている
  // eslint-disable-next-line no-unused-expressions
  // カウントするたびに画面全体にレンダリングが走るためカウントするたびに探していることになる
  // const selected = items.find((item) => item.isSelected);
  // const selected = useMemo(
  //   () => items.find((item) => item.isSelected),
  //   [items]
  // );
  // useMemoは第二引数の状態変数に変更がないと実行しないので、2個以上の状態変数を使う処理があれば第二引数にも2個以上の状態変数を設定しないといけない

  // これはダメ
  // const selected = useMemo(
  //   () => items.find((item) => item.id === count),
  //   [items]
  // );

  // これはOK
  const selected = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );
  console.log(initialItems);

  return (
    <div>
      <h1>カウント：{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>カウント</button>
      <h1>商品ID：{selected?.id}</h1>
    </div>
  );
};

export default UseMemoAdvance;
