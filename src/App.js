import logo from "./logo.svg";
import "./App.css";

import UseEffectHome from "./screens/UseEffectHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectPost from "./components/UseEffectPost";
import UseEffectUser from "./components/UseEffectUser";

function App() {
  return (
    <>
      {/* <CountUseEffect /> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact element={<UseEffectHome />} />
          <Route path={"/posts"} element={<UseEffectPost />} />
          <Route path={"/user"} element={<UseEffectUser />} />
          <Route path={"/user/:id"} element={<UseEffectUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
