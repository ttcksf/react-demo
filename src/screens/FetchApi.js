import React, { useState } from "react";

const FetchApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState({});

  const fetchTodos = () => {
    setLoading(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTodo(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <>
      <div>
        <button onClick={fetchTodos}>{loading ? "処理中" : "クリック"}</button>
        <p>{todo?.title}</p>
        <span>{error && "エラーです"}</span>
      </div>
    </>
  );
};

export default FetchApi;
