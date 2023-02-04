import Input from "./Input";

export default function InputApp({onSubmit, input, setInput}){
    return(
        <form 
            onSubmit={onSubmit}
        >
            <Input 
                input={input} 
                setInput={setInput}
            />
            <button type="submit">add</button>
      </form>
    )
}