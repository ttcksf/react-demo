import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactQuery from "./screens/reactQuery/ReactQuery";
import UseQuery from "./screens/reactQuery/UseQuery";
import UseMutation from "./screens/reactQuery/UseMutation";

function App() {
  return (
    <>
      {/* <UseQuery /> */}
      <UseMutation />
    </>
  );
}

export default App;
