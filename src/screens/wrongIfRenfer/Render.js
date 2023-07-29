import React from "react";
import { useState } from "react";
import Counter from "../wrongIfRenfer/Counter";

const Render = () => {
  const [isAdmin, setAdmin] = useState(true);

  return (
    <div>
      {/* isAdminは変わっているが親の状態でしかなく子は変更ないため子の再レンダリングは走らない */}
      {/* {isAdmin ? <Counter name="管理者" /> : <Counter name="スタッフ" />} */}
      {/* 例えば子の表示内容を変えるようにすれば再レンダリングでカウントがリセットされる */}
      {/* {isAdmin ? (
        <div>
          <Counter name="管理者" />
        </div>
      ) : (
        <section>
          <Counter name="スタッフ" />
        </section>
      )} */}
      {/* もしくはkey属性を割り当てることでも良い。mapメソッドで使用する要素の判定をするための属性。https://ja.legacy.reactjs.org/docs/lists-and-keys.html#keys */}
      {/* レンダリングさせるべきか、レンダリングさせないべきは仕様による */}
      {isAdmin ? (
        <Counter name="管理者" key="admin" />
      ) : (
        <Counter name="スタッフ" key="staff" />
      )}
      <br />
      <button onClick={() => setAdmin((user) => !user)}>切り替え</button>
    </div>
  );
};

export default Render;
