import React, { useState } from "react";

const FetchApi = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    // e.preventDefault();
    setTaskList([
      ...taskList,
      {
        // 配列の長さにすると削除で連番崩れや重複が起きる
        // id: taskList.length,
        id: crypto.randomUUID(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleDelete = (id) => {
    let array = taskList.filter((task) => task.id !== id);
    setTaskList(array);
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleChange} value={inputText} />
        {/* 画面が表示された時に実行するという意味。addTaskの中の送信防止にeが必要になるが画面が表示された時にはイベントがないため正常に動作しない。 */}
        {/* <button onClick={addTask(e)}>追加</button> */}
        {/* イベントが発生した時に関数の実行という意味 */}
        <button onClick={(e) => addTask(e)}>追加</button>
        {/* 今回の場合だとformタグを消してeがなくてもaddTaskが動作するように変更してもよい。 */}
        {/* <button onClick={() => addTask()}>追加</button> */}
        {/* addTaskはコールバックで定義したので関数名のみ指定してもOK。アロー関数をonClick内で記載するのと同じ動作になる。厳密には違うが今回はOK。 */}
        {/* <button onClick={addTask}>追加</button> */}
      </form>
      <div>
        {taskList.map((task) => (
          <div key={task.id}>
            <div>
              {task.text}:{task.id}
              {/* 画面が表示された時に実行するという意味。handleDeleteはどれを消すかを指定しないといけないから正常な動作にならない */}
              {/* <button onClick={handleDelete(task.id)}>削除</button> */}
              {/* クリックした時に関数の実行という意味 */}
              <button onClick={() => handleDelete(task.id)}>削除</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchApi;
