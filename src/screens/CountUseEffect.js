import React, { useEffect, useState } from "react";

const CountUseEffect = () => {
  // const [number, setNumber] = useState(0);
  // const [name, setName] = useState("");
  // console.log("render");

  //①useEffectはレンダリングの後に実行されるので少しのラグがある
  //②意図しないレンダリングを回避するには監視対象を第二引数に設定
  useEffect(() => {
    // console.log("useEffectです");
    // document.title = number;
  }, []);
  // console.count("レンダリングです");

  // const [name, setName] = useState("");
  // const [state, setState] = useState({
  //   addName: "",
  //   saved: false,
  // });
  //③これだと入力しないでクリックしても実行され続ける
  //JSのデータ型にはプリミティブ（文字列、数値、真偽、undefined）と非プリミティブ（オブジェクト、配列）がある。
  //stateをプリミティブじゃないオブジェクト、配列で設定するとクリックするたびに新しい変更と捉えてしまうから。
  // useEffect(() => {
  //   console.log("useEffectです");
  // }, [state]);

  //④プリミティブ型を指定すれば③を解決できる
  // useEffect(() => {
  //   console.log("useEffectです");
  // }, [state.addName, state.saved]);

  // const handleAdd = () => {
  //   setState((prev) => ({ ...prev, addName: name }));
  // };
  // const handleSave = () => {
  //   setState((prev) => ({ ...prev, saved: true }));
  // };

  //⑤これだと無限ループになる。レンダリングするたびにインターバルを初期化していないから
  const [number, setNumber] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     setNumber(number + 1);
  //   }, 1000);
  // }, [number]);
  //ステートを初回だけ検知すれば問題ない処理は第二引数に空配列を渡す
  // useEffect(() => {
  //   setInterval(() => {
  //     setNumber((num) => num + 1);
  //   }, 1000);
  // }, []);
  //⑥インターバルを初期化する関数を後続に書くことでも解決できる
  useEffect(() => {
    console.log("useEffectです");
    const interval = setInterval(() => {
      setNumber((num) => num + 1);
    }, 1000);

    //⑦ストリクトモードで見るとクリーンアップが必要なことがわかる
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* <p>{number}</p>
      <button onClick={() => setNumber((num) => num + 1)}>+</button>
      <div>
        <input onChange={(e) => setName(e.target.value)} />
      </div> */}

      {/* <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <div>
          <button onClick={handleAdd}>追加</button>
          <button onClick={handleSave}>保存</button>
        </div>
        <div>{`{名前: ${state.addName},保存: ${state.saved.toString()}}`}</div>
      </div> */}

      <div>{number}</div>
    </div>
  );
};

export default CountUseEffect;
