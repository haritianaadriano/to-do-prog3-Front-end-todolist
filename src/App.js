import { useState } from 'react';
import './App.css';

import InputApp from './components/InputApp';
import ToDoApp from './components/ToDoApp';

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
        <InputApp 
          input={input} 
          setInput={setInput} 
          onSubmit={onSubmit}
        />
        <ToDoApp
          toDoList={toDoList}
          toDone={toDone}
          done={done}
        />
      </header>
    </div>
  );
}

export default App;
