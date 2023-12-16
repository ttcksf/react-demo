import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
    id: '0001',
    name: 'Yamada',
    age: 20,
  },
  {
    id: '0002',
    name: 'Tanaka',
    age: 21,
  },
  {
    id: '0003',
    name: 'Yoshida',
    age: 22,
  },
];
const PlaceHolderData = () => {
  const studentsQuery = useQuery({
    queryKey: ['students'],
    queryFn: () => {
      return [...studentsData];
    },
    placeholderData: [
      {
        id: '0000',
        name: 'Sample',
        age: 99,
      },
    ],
  });
  // console.log(studentsQuery);
  console.log(studentsQuery.status);
  console.log(studentsQuery.data);

  if (studentsQuery.status === 'pending') return <p>ローディング中・・・</p>;
  if (studentsQuery.status === 'error') return <p>エラー！</p>;
  return (
    <>
      <div>
        {studentsQuery.data.map((student) => (
          <p key={student.id}>{student.name}</p>
        ))}
      </div>
    </>
  );
};

export default PlaceHolderData;
