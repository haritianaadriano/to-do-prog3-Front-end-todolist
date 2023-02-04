export default function ToDo({toDoList, toDone}){
    return(
        <>
            <h3>To-do</h3>
            <ul>
                {toDoList.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <input 
                        type="checkbox" 
                        onChange={() => toDone(index)}
                    />
                </li>
                ))}
            </ul>
        </>
    )
}