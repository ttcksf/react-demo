import React, { useEffect, useState } from "react";

const useRandomTask = (id) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTask(data.title));
    };
    fetchData();
  }, [id]);
  return task;
};

export default useRandomTask;
