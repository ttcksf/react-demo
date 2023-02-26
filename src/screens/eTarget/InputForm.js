import React, { useCallback, useMemo, useState } from "react";
import InputText from "./InputText";

const InputForm = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(0);

  const changeText = (e) => {
    setText(e.target.value);
  };

  // const calcResult = () => {
  //   let num = 0;
  //   for (let i = 1; i < 2000000000; i++) {
  //     num += 1;
  //   }
  //   setResult(num);
  // };

  const calcResult = useCallback(() => {
    let num = 0;
    for (let i = 1; i < 2000000000; i++) {
      num += 1;
    }
    setResult(num);
  }, [result]);

  // const calcResult = useMemo(() => {
  //   let num = 0;
  //   for (let i = 1; i < 2000000000; i++) {
  //     num += 1;
  //   }
  //   setResult(num);
  // }, [result]);
  console.count("親です");

  return (
    <>
      <button onClick={calcResult}>計算する</button>
      <p>計算結果：{result}</p>
      <input type="text" value={text} onChange={changeText} />
      <p>入力内容：{text}</p>
    </>
  );
};

export default InputForm;
