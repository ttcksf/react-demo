import React, { useState } from "react";

const BegginerMistake1 = () => {
  const [answer, setAnswer] = useState({
    name: "",
    age: "",
    gender: "",
    from: "",
    job: "",
  });

  const handleName = (e) => {
    // オブジェクトのプロパティに直接代入するがこれだとエラーになる
    // setAnswer((answer.name = e.target.value));
    // ただこれだと他のプロパティが入力は反映されない
    // setAnswer({
    //   name: e.target.value,
    // });
    // スプレッド構文で他のプロパティをコピーしておく
    // setAnswer({
    //   ...answer,
    //   name: e.target.value,
    // });
    // もしくはリターンする
    setAnswer((prev) => {
      return {
        ...answer,
        name: e.target.value,
      };
    });
  };

  const handleAge = (e) => {
    // setAnswer({
    //   ...answer,
    //   age: e.target.value,
    // });
    setAnswer((prev) => {
      return {
        ...answer,
        age: e.target.value,
      };
    });
  };
  console.log(answer);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="お名前"
          value={answer.name}
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="年齢"
          value={answer.age}
          onChange={handleAge}
        />
      </form>
    </div>
  );
};

export default BegginerMistake1;
