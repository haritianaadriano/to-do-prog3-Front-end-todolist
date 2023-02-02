export default function ToDone(props){
    let [done] = props;
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