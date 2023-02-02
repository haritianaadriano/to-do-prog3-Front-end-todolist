import { useState } from 'react';
import './App.css';
import toDo from './utils/toDo';
import toDone from './utils/toDone';

function App() {

  let array = [];
  const[toDoList, setToDoList] = useState([]);
  const[task, setTask] = useState("");
  const[done, setDone] = useState(false);

  function onChange(event){
    setTask(event.target.value);
  }

  function onPush(){
    let toDoObject = {
      task: task,
      done: done
    }
    
    task != "" || null ? setToDoList(toDoObject, ...array) : null
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={onChange}/>
        <button onClick={onPush}>add</button>
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
