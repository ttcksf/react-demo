import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const UseReactQuery = () => {
  console.log("render");
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  if (error) {
    console.log(error);
  }

  return (
    <>
      {isLoading ? (
        <p>ローディング中。。。</p>
      ) : (
        <div>
          {data.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default UseReactQuery;
