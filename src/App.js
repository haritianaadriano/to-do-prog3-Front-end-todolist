import { useState } from 'react';
import './App.css';
import toDo from './utils/toDo';
import toDone from './utils/toDone';

function App() {

  const[toDoList, setToDoList] = useState([]);
  const[task, setTask] = useState("");
  const[done, setDone] = useState(false);

  function onChange(event){
    let array = [];
    let toDoObject = {
      task: task,
      done: done
    }

    setTask(event.target.value);
    
    array.push(toDoObject);
    setToDoList(array);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text"/>
        <button onClick={onChange}>add</button>
        <div className="cage">
          <toDo toDoList={toDoList} setDone={setDone}/>
        </div>
        <div className="cage">
          <toDone toDoList={toDoList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
