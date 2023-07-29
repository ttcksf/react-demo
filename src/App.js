import "./App.css";
// import Test from "./screens/importBasic/Test";
// defaultじゃないエクポートをインポートするときは{}で囲む
// import { num } from "./screens/importBasic/Test";
// 同じファイルから複数のインポートは1行で書くことができる(ライブラリでも使う書き方)
import { num, str } from "./screens/importBasic/Test";
// 名前つきエクスポートした場合のインポート
import { Test } from "./screens/importBasic/Test";

function App() {
  return (
    <div className="App">
      <Test />
      <p>{num}</p>
      <p>{str}</p>
    </div>
  );
}

export default App;
