import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

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

const DemoCache = () => {
  const studentsQuery = useQuery({
    queryKey: ["task"],
    queryFn: () => [...students],
  });

  const studentsMutation = useMutation({
    mutationFn: () => students.push({ id: "0004", name: "ddd", age: 23 }),
  });
  console.log(students);

  return (
    <>
      <h1>生徒一覧</h1>
      {studentsQuery.isLoading ? (
        <p>ローディング中。。。</p>
      ) : (
        <div>
          {studentsQuery.data.map((student) => (
            <p key={student.id}>{student.name}</p>
          ))}
          <button onClick={() => studentsMutation.mutate()}>
            生徒情報の追加
          </button>
        </div>
      )}
    </>
  );
};

export default DemoCache;
