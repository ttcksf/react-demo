import { useState } from 'react';
import './App.css';
import WrongFilter from './screens/wrong-filter/WrongFilter';
import CorrectFilter from './screens/wrong-filter/CorrectFilter';

function App() {
  return (
    <div className="App">
      <CorrectFilter />
    </div>
  );
}

export default App;
