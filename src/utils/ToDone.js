export default function ToDone({done}){
    return(
        <>
            <h3>Done</h3>
            <ul>
                {done.map((todo, index) => (
                <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}