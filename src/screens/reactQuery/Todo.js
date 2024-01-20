import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const Todo = () => {
  const getTodo = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const data = await response.json();
    return data;
  };

  const todo = useQuery({
    queryKey: ['todos'],
    queryFn: getTodo,
  });

  console.log(todo);
  return (
    <div>
      {todo.isLoading ? (
        <h1>読み込み中</h1>
      ) : (
        <p>
          {todo.data.id}:{todo.data.title}
        </p>
      )}
    </div>
  );
};

export default Todo;
