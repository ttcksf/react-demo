import React, { useEffect, useState } from "react";

const BegginerMistake2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // フルネームを個別で管理しなくてもOK
  // const [fullName, setFullName] = useState("");
  const fullName = firstName + lastName;
  const [item, setItem] = useState(0);
  // 合計金額を監視しなくてもOK
  // const [total, setTotal] = useState(0);
  const price = 100;
  // 個数が更新されるたびに計算するだけでOK
  const total = price * item;

  const addItem = () => {
    setItem((prev) => prev + 1);
  };
  // 個数を監視しなくてもOK
  // useEffect(() => {
  //   setTotal(price * item);
  // }, [item]);
  // 入力内容を監視しなくてもOK
  // useEffect(() => {
  //   setFullName(firstName + lastName);
  // }, [firstName, lastName]);

  return (
    <div>
      <p>単価：{price}円</p>
      <button onClick={addItem}>1個追加する</button>
      <h3>合計金額：{total}円</h3>
      <hr />
      <p>購入者：{fullName}</p>
      <form>
        <input
          type="text"
          placeholder="姓"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="名"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default BegginerMistake2;
