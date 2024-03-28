const Form = ()=>{

    const  [name, setName] = useState("")
    
    const onSumbit = (e)=>{
        e.preventDefault()
        alert(`You submitted ${name}`)
    }
    return(
        <form >
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default Form