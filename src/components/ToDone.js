export default function ToDone({done}){
    return(
        <>
            <h3>Done</h3>
            <ul
                data-testid="todone-id"
            >
                {done.map((todo, index) => (
                <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}