import React, { useEffect, useState } from 'react';

const PropertiesError = () => {
  const [todos, setTodos] = useState([]);
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
      {/* 初期値に空の配列を渡しておくことで回避することができる */}
      {/* ＆＆を使った条件分岐でデータがないときはスキップさせる */}
      {todos &&
        todos.map((todo, key) => {
          return <p key={key}>{todo.title}</p>;
        })}
    </div>
  );
};

export default PropertiesError;
