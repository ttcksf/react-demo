import React, { useEffect, useState } from 'react';

const PropertiesError = () => {
  // const [todos, setTodos] = useState('');
  const [todos, setTodos] = useState('');
  const fetchData = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/todos/'
    ).then((res) => res.json());
    setTodos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* 時間差があると初期値の文字列に対してmapを実行しようとして、文字列なので拒否される */}
      {/* 表示はデータがあることを確認するか、初期値を空の配列にしておく */}
      {/* 開発中のリロードは問題なくてもサーバー立ち上げ直しでエラーになる */}
      {todos &&
        todos.map((todo, key) => {
          return <p key={key}>{todo.title}</p>;
        })}
    </div>
  );
};

export default PropertiesError;
