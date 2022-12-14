import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Debounce = () => {
  const query = useRef();
  const [searchQuery, setSearchQuery] = useState([]);
  const [tasks, setTasks] = useState({});

  const searchTasks = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTasks(data));
  };

  const handleInput = () => {
    console.log(query.current.value);
    setSearchQuery(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(query.current.value)
      )
    );
  };

  useEffect(() => {
    searchTasks();
  }, []);

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
          <input ref={query} onChange={() => handleInput()} />
        </div>
        <div>
          {searchedTasks.map((task, id) => (
            <p key={id}>{task}</p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Debounce;
