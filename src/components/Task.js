export default function Task({todo, index, toDone}){
    return(
        <div>
            <li 
                key={index}
            >
                {todo}
                <input 
                    type="checkbox" 
                    onChange={() => toDone(index)}
                />
            </li>
        </div>
    )
}