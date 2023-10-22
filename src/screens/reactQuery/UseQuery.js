import { useQuery } from "@tanstack/react-query";
import React from "react";

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

const studentsData = [
  {
    id: "0001",
    name: "Yamada",
    age: 20,
  },
  {
    id: "0002",
    name: "Tanaka",
    age: 21,
  },
  {
    id: "0003",
    name: "Yoshida",
    age: 22,
  },
];

const UseQuery = () => {
  // useQueryというフックをインストールして使用してデータ取得ができる
  // クエリをqueryKeyとして一意のキーワードを決める
  // /students/0001/

  const studentsQuery = useQuery({
    queryKey: ["students"],
    queryFn: (obj) => {
      // 非同期処理で動作してオブジェクトで管理される（クエリ、ステータスなど）
      // Promiseで返されると同じような仕組みで他の処理と並列で動作して成功、失敗を判定しながら動作
      console.log(obj);
      return [...studentsData];
    },
  });
  console.log(studentsQuery);
  console.log(studentsQuery.status);
  console.log(studentsQuery.data);
  // 非同期処理で動くためデータ取得よりもmapなど表示処理が早いとエラーになる
  // 一般的にはローディングやエラーをuseStateで自作して管理するがuseQueryにはプロパティで用意されている

  if (studentsQuery.status === "pending") return <p>ローディング中・・・</p>;
  if (studentsQuery.status === "error") return <p>エラー！</p>;

  return (
    <div>
      {studentsQuery.data.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </div>
  );
};

export default UseQuery;
