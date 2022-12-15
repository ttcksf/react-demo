import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);

  const searchTasks = async () => {
    const response = await axios.get(
      `https://dummyjson.com/todos/search?q=${query}`
    );

    if (response && response.data) {
      setTasks(response.data);
    }
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    searchTasks("");
  }, []);

  useEffect(() => {
    searchTasks(query);
  }, [query]);

  return (
    <div>
      <form>
        <div>
          <input value={query} onChange={handleInput} />
        </div>
        <div>
          {tasks.map((task, id) => (
            <p key={id}>{task}</p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Debounce;
