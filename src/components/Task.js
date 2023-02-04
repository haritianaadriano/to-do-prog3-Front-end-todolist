import Checkbox from "./CheckBox"

export default function Task({todo, index, toDone}){
    return(
        <div>
            <li 
                key={index}
                data-testid="task-id"
            >
                {todo}
                <Checkbox
                    toDone={toDone}
                    index={index}
                />
            </li>
        </div>
    )
}