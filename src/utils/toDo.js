export default function toDo(props){
    let [toDoList, setDone] = props;

    function onClick(){
        setDone(true);
    }

    return(
        <>
            <ul>
                {toDoList.map(
                    element => {
                       return element.done == false ? 
                        (
                        <li>
                            {element.task}
                            <input 
                                type="checkbox"
                                onClick={onClick}
                            />
                        </li>
                        ) 
                        : null
                    }
                )}
            </ul>
        </>
    )
}