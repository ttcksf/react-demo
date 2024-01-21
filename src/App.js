import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './screens/reactRouterDom/Contact';
import Top from './screens/reactRouterDom/Top';
import Posts from './screens/reactRouterDom/Posts';
import Post from './screens/reactRouterDom/Post';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<Post />}></Route>
          {/* 昔は一番下に書かないと他のパスと衝突していたが最近は詳細度の高いものから優先してくれるのでどこでもOK */}
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
