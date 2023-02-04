export default function Task({todo, index}){
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