import React, { useEffect, useState } from 'react';
// モダンJSの基本であるクライアントレンダリングによるユーザーのメリットはプロジェクト一式を丸ごとブラウザで初回に受け取ったらコンポーネントをキャッシュするからサイトを使用すればするほどロードが早くなる
const UseState = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  // 低速で検証するとリロード（他の画面からの遷移）で時間がかかる上、リロード（他画面から戻る）ごとにuseEffectでデータを取りに行くので毎回長い時間かかる（クライアントレンダリング初期の課題でありReduxのような状態管理ライブラリのきっかけになった。Reduxだと取得したデータを管理できるのでページ数の多いサイトで有用だった。）
  return (
    <div>
      {todos.length === 0 ? (
        <h1>読み込み中</h1>
      ) : (
        todos.map((todo, i) => <p key={i}>{todo.title}</p>)
      )}
    </div>
  );
};

export default UseState;
