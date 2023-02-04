export default function Input({input, setInput}){
    return (
        <div>
            <input 
                value={input} 
                placeholder="Make a task"
                onChange={e => setInput(e.target.value)}
            />
        </div>
    )
}