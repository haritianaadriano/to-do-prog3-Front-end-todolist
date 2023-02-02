export default function toDone (props){
    let [toDoList] = props;
    return(
        <>
            <ul>
                {toDoList.map(
                    element =>{
                        return element.done == true ? 
                            (
                                <li>{element.task}</li>
                            )
                            : null
                    }
                )}
            </ul>
        </>
    )
}