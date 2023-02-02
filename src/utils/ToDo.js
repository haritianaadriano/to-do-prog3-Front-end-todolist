export default function ToDo(props){
    let [toDoList, toDone] = props;
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
                        Done
                </li>
                ))}
            </ul>
        </>
    )
}