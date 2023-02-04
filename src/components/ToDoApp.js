import ToDo from './components/ToDo';
import ToDone from './components/ToDone';

export default function ToDoApp({toDoList, toDone, done}){
    return(
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
    )
}