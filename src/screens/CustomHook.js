import React, { useEffect, useState } from "react";
import useRandomTask from "./useRandomTask";

const CustomHook = () => {
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
