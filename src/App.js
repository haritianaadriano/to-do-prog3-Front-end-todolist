import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import ToDone from './components/ToDone';
import InputApp from './components/InputApp';

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
      <div className="container">
        <div className="children">
        <ToDo 
          toDoList={toDoList} 
          toDone={toDone}
        />
        </div>
        <div className="children">
          <ToDone 
            done={done}
          />
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
