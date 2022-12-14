import logo from "./logo.svg";
import "./App.css";

import UseEffectHome from "./screens/UseEffectHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectPost from "./components/UseEffectPost";
import UseEffectUser from "./components/UseEffectUser";
import Counter from "./screens/Counter";
import Debounce from "./screens/Debounce";
import ManyInput from "./screens/ManyInput";

function App() {
  return (
    <>
      <ManyInput />
    </>
  );
}

export default App;
