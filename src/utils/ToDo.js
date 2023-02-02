export default function ToDo(props){
    let [toDoList, toDone] = props;
    return(
        <>
            <h3>To-do</h3>
            <ul>
                {toDoList.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button 
                        type="button" 
                        onClick={() => toDone(index)}
                    >
                        Done
                    </button>
                </li>
                ))}
            </ul>
        </>
    )
}