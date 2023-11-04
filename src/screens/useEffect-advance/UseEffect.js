import React, { useEffect, useState } from "react";

// index.jsでストリクトモードをオフにしておく
const UseEffect = () => {
  const [textState, setTextState] = useState("");
  // const textRef = useRef();

  const [flag, setFlag] = useState(false);

  // 第一引数に副作用の内容、第二引数に副作用を動作させても良いタイミング(空ならリロード時のみ ※useRefを使うなど不要なレンダリングを無くす努力も必要)
  useEffect(() => {
    console.count("副作用");
    // 初期化関数はリロードから数えて2回目以降のレンダリングで副作用の前に実行する仕組み(第二引数が空の配列なら実行されない)
    // ただ第二関数を空の配列にすることで対処できることがほとんど
    return () => {
      console.log("初期化");
    };

    // 第二引数をしないと副作用はレンダリングのたびに起きる仕組み
  }, [flag]);
  // シングルスレッドに関わらずuseEffectの中身はレンダリングの後に起きるため副作用に使用することが一番適している
  console.log("レンダリング");
  return (
    <div>
      <input
        type="text"
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
      />
      {/* <input type="text" ref={textRef} /> */}
      <button onClick={() => setFlag((prev) => !prev)}>送信</button>
    </div>
  );
};

export default UseEffect;
