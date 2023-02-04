export default function Input({input, setInput}){
    return (
        <div>
            <input 
                value={input} 
                onChange={e => setInput(e.target.value)}
            />
        </div>
    )
}