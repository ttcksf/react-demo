import React, { useRef, useState } from "react";

const Form = () => {
  // ログインのように検証するだけならステートで新しく持つ必要はない
  // データベースからユーザー情報から引っ張ってくるから
  //むしろステート関数の扱いが負担になる
  //さらにuseStateの場合は変数が更新されると再レンダリングされる
  // 新しく状態管理する必要があるか、入力されるたびに再レンダリングが必要かが大事
  //例えば同じコンポーネントで入力内容が必要になるのならuseStateが必要
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ email, password });
  // };

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          {/* <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
          <input ref={emailRef} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          {/* <input id="password" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <input ref={passwordRef} id="password" type="password" />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
