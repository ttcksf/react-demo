import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, []);

  console.log([]);

  return (
    <div>
      {!data || data.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>{data[0].body}</div>
      )}
    </div>
  );
};

export default FetchData;
