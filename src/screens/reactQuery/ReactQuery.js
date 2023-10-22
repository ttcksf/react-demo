import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

const ReactQuery = () => {
  const students = [
    {
      id: "0001",
      name: "aaa",
      age: 20,
    },
    {
      id: "0002",
      name: "bbb",
      age: 21,
    },
    {
      id: "0003",
      name: "ccc",
      age: 22,
    },
  ];
  const queryClient = useQueryClient();

  const newStudentMutation = useMutation({
    mutationFn: () => students.push({ id: "0004", name: "ddd", age: 23 }),
    onSuccess: () => queryClient.invalidateQueries(["students"]),
  });
  const postQuery = useQuery({
    queryKey: ["students"],
    queryFn: () => [...students],
  });

  if (postQuery.isLoading) return <p>ローディング。。。</p>;
  if (postQuery.isError) return <p>エラー！</p>;
  console.log(students);

  return (
    <div>
      {postQuery.data.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
      <button onClick={() => newStudentMutation.mutate()}>
        生徒情報の追加
      </button>
    </div>
  );
};

export default ReactQuery;
