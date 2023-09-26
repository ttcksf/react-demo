import "./App.css";
import UseSearch from "./screens/useSearch/UseSearch";
import UseNext from "./screens/useSearch/UseNext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact element={<UseSearch />} />
          <Route path={"/next"} element={<UseNext />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
