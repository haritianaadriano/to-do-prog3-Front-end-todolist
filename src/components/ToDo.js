import Task from "./Task"

export default function ToDo({toDoList, toDone}){
    return(
        <div>
            <h3>To-do</h3>
            <ul
                data-testid="todo-id"
            >
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