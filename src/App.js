import { useState } from 'react';
import './App.css';
import toDo from './utils/toDo';
import toDone from './utils/toDone';

function App() {

  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
