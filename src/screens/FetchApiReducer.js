import React, { useReducer } from "react";
import { init, todoSwitch } from "./reducer/reducer";

const FetchApiReducer = () => {
  // switch文と初期ステートを取る
  const [state, dispatch] = useReducer(todoSwitch, init);

  const fetchTodos = () => {
    dispatch({ type: "START" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  };
  return (
    <>
      <div>
        <button onClick={fetchTodos}>
          {state.loading ? "処理中" : "クリック"}
        </button>
        <p>{state.todo?.title}</p>
        <span>{state.error && "エラーです"}</span>
      </div>
    </>
  );
};

export default FetchApiReducer;
