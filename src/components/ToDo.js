import Task from "./Task"

export default function ToDo({toDoList, toDone}){
    return(
        <div
            data-test-id="todo-id"
        >
            <h3>To-do</h3>
            <ul>
                {toDoList.map((todo, index) => (
                    <Task 
                        todo={todo} 
                        index={index} 
                        toDone={toDone}
                    />
                ))}
            </ul>
        </div>
    )
}