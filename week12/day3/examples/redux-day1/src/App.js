import React, { useState } from "react";
import './App.css';
import Counter from './components/Counter'
import ComponentTwo from './components/ComponentTwo'


function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter />
      <ComponentTwo />
    </div>
  );
}

export default App;
