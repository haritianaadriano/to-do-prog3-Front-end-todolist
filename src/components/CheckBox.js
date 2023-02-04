export default function Checkbox({toDone, index}){
    return(
        <div>
            <input 
                type="checkbox" 
                onChange={() => toDone(index)}
            />
        </div>
    )
}