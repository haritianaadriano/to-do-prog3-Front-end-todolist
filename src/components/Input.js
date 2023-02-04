export default function Input({input, setInput}){
    return (
        <div>
            <input 
                data-testid="input-id"
                value={input} 
                placeholder="Make a task"
                onChange={e => setInput(e.target.value)}
            />
        </div>
    )
}