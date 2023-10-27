import React, { useEffect, useState } from "react";

const WrongUseEffect = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      console.log("取得中");
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (res.ok) {
        const results = await res.json();
        console.log("完了");
        setTodos(results);
        console.log(results);
      } else {
        setIsError(new Error(res.statusText));
      }
    } catch (error) {
      setIsError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>ローディング中。。。</p>
      ) : (
        <div>
          {todos.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default WrongUseEffect;
