import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
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
const UseMutation = () => {
  const taskRef = useRef();
  // useMutationというフックをインストールして使えて、データ作成、更新などができる
  const taskMutation = useMutation({
    mutationFn: () => {
      return taskRef.current.value;
    },
    onSuccess: (data) => {
      // mutationが終わった後の処理(ページ遷移など)
      console.log(data);
    },
  });
  console.log(taskMutation);

  return (
    <div>
      <p>Todo</p>
      <input type="text" ref={taskRef} />
      <button onClick={() => taskMutation.mutate(taskRef)}>作成</button>
      <p>{taskMutation.data}</p>
    </div>
  );
};

export default UseMutation;
