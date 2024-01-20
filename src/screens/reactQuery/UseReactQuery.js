import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

// npm i react-router-dom
// npm i @tanstack/react-query
// npm i @tanstack/react-query-devtools
// const queryClient = new QueryClient();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//     <ReactQueryDevtools />
//   </QueryClientProvider>
// );

const UseReactQuery = () => {
  // QueryClientのインスタンスを返す（キャッシュや事前取得に必要）
  // コンポーネントの状態管理の役割を持っている
  const queryClient = useQueryClient();

  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  };
  const getTodo = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const data = await response.json();
    return data;
  };

  const todos = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    // onSuccess: queryClient.prefetchQuery({
    //   queryKey: ['todos'],
    //   queryFn: fetchTodos,
    //   staleTime: 5000,
    // }),
  });
  return (
    <div>
      {todos.isLoading ? (
        <h1>読み込み中</h1>
      ) : (
        todos.data.map((todo, i) => <p key={i}>{todo.title}</p>)
      )}
    </div>
  );
};

export default UseReactQuery;
