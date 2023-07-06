import { useState } from "react";
import "./App.css";
import Children from "./screens/children/Children";

function App() {
  return (
    <div className="App">
      <Children text="これはpropsのtextです">
        {/* childrenはpropsのプロパティの一種で、親で書いたコーディング内容をそのまま送れるのが特徴 */}
        <p>これはpropsのchildrenです。</p>
      </Children>
      <hr />
      <Children text="これはpropsのtextです">
        {/* childrenはpropsのプロパティの一種で、親で書いたコーディング内容をそのまま送れるのが特徴 */}
        <h1>コピーしました</h1>
      </Children>
    </div>
  );
}

export default App;
