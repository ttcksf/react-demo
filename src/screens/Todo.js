import React, { useState } from "react";
import Button from "../components/Button";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const changeText = (e) => {
    setInputText(e.target.value);
  };
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App" style={style.container}>
      <div>
        <div class="main">
          <input
            type="text"
            id="input"
            value={inputText}
            className="input"
            style={style.input}
            onChange={(e) => changeText(e)}
          />
          <Button
            btnText="追加"
            setInputText={setInputText}
            setTodoList={setTodoList}
            todoList={todoList}
            inputText={inputText}
          />
        </div>
        <div class="todo-container" style={style.todoContainer}>
          <ul id="todos" className="todos">
            {todoList.map((todo, index) => (
              <li style={style.li} key={index}>
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  input: {
    display: "inline-block",
    width: "200px",
    height: "40px",
    padding: "10px",
    marginRight: "30px",
  },
  todoContainer: {
    background: "#eef1f4",
    padding: "30px",
    marginTop: "30px",
  },
  li: {
    listStyle: "none",
    textAlign: "left",
  },

  button: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    display: "inline-block",
    width: "80px",
    height: "40px",
    background: "#1877f2",
  },
};

export default Todo;
