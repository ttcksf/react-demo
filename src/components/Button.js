import React from "react";

const Button = ({
  btnText,
  setInputText,
  setTodoList,
  todoList,
  inputText,
}) => {
  const add = () => {
    setTodoList([...todoList, { text: inputText }]);
    setInputText("");
  };
  return (
    <>
      <button
        id="add"
        className="add"
        style={style.button}
        onClick={() => add()}
      >
        {btnText}
      </button>
    </>
  );
};

const style = {
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

export default Button;
