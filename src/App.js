import { useState } from 'react';
import './App.css';

function App() {

  const [toDoList, setTodoList] = useState([]);
  const [done, setDone] = useState([]);
  const [input, setInput] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setTodoList([...toDoList, input]);
    setInput("");
  };

  const toDone = (index) => {
    const newTodos = [...toDoList];
    const todo = newTodos.splice(index, 1);
    setTodoList(newTodos);
    setDone([...done, ...todo]);
  };

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">add</button>
      </form>
      <div className="container">

      </div>
      </header>
    </div>
  );
}

export default App;
