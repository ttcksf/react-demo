import React from "react";
import { Link } from "react-router-dom";
import UseSearch from "../useSearch/UseSearch";

const UseNext = () => {
  return (
    <div className="App">
      <Link to="/" element={<UseSearch />}>
        戻る
      </Link>
      <div>UseNext</div>
    </div>
  );
};

export default UseNext;
