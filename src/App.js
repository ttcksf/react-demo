import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/comBtn/About";
import Service from "./screens/comBtn/Service";

function App() {
  return (
    <>
      <About />
      <Service />
    </>
  );
}

export default App;
