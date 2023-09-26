import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UseNext from "../useSearch/UseNext";

const UseSearch = () => {
  const data = [
    "Web制作",
    "SEOマーケティング",
    "動画編集",
    "Webデザイン",
    "SNSマーケティング",
  ];
  // const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ keyword: "" });
  const keyword = searchParams.get("keyword");
  const results = data.filter((item) => {
    return item.includes(keyword);
  });
  return (
    <div className="App">
      <Link to="/next" element={<UseNext />}>
        次の画面
      </Link>

      <div>
        <input
          type="text"
          id={keyword}
          value={keyword}
          // onChange={(e) => setKeyword(e.target.value)}
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("keyword", e.target.value);
              return prev;
            })
          }
        />
        {results.map((result) => (
          <p key={result}>{result}</p>
        ))}
      </div>
    </div>
  );
};

export default UseSearch;
