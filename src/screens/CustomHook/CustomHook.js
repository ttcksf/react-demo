import React, { useEffect, useState } from "react";
import useRandomTask from "./useRandomTask";

const CustomHook = () => {
  // const [task, setTask] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((res) => res.json())
  //       .then((data) => setTask(data.title));
  //   };
  //   fetchData();
  // }, []);
  // const task = useRandomTask();
  // const task = useRandomTask(1);

  const [inputText, setInputText] = useState("");
  const task = useRandomTask(inputText);

  return (
    <div>
      <form>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      {task}
    </div>
  );
};

export default CustomHook;
