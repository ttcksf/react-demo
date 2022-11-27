import React, { useMemo, useRef, useState } from "react";

const SearchForm = () => {
  const [tasks, setTasks] = useState([]);
  // const [tasks, setTasks] = useState(["test", "test"]);
  // const [filteredItems, setFilteredItems] = useState([]);

  //③元あるタスクを配列じゃ無い形で派生させる。useMemoでキャッシュさせるとさらに良い
  const [query, setQuery] = useState("");
  const filteredItems = useMemo(() => {
    return tasks.filter((task) => {
      return task.toLowerCase().includes(query.toLocaleLowerCase());
    });
  }, [tasks, query]);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentValue = inputRef.current.value;
    if (currentValue === "") return;

    setTasks((data) => {
      return [...data, currentValue];
    });
    //②検索結果を別で状態管理する。ただ冗長かつ、配列を毎回作り直している
    // setFilteredItems((data) => {
    //   return [...data, currentValue];
    // });
  };

  //①単純にフィルターするだけ。こちらだと上書きになってしまう
  // const handleChange = (e) => {
  //   const currentValue = e.target.value;
  //   setFilteredItems((data) => {
  //     return data.filter((d) =>
  //       d.toLowerCase().includes(currentValue.toLocaleString())
  //     );
  //   });
  // };
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      {/* <input onChange={handleChange} type="search" /> */}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        新しいタスク：
        <input type="text" ref={inputRef} />
        <button type="submit">追加</button>
      </form>
      <h3>タスク一覧</h3>
      {filteredItems.map((task) => (
        <div>{task}</div>
      ))}
    </>
  );
};

export default SearchForm;
