import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UseReactQuery from './screens/reactQuery/UseReactQuery';
import UseState from './screens/reactQuery/UseState';
import Todo from './screens/reactQuery/Todo';
import { useQueryClient } from '@tanstack/react-query';

function App() {
  return (
    <div className="App">
      <UseReactQuery />
      {/* <Todo /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
