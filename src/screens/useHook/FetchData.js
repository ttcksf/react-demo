import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(undefined);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch(() => alert("error"));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setData(json);
      } catch (error) {
        alert("error");
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return <>{data === undefined ? "" : <div>{data[2].title}</div>}</>;
};

export default FetchData;
