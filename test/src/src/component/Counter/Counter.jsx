import { useState } from "react"

const Counter = ()=>{

    const [count,setCount]=useState(0)
    
    const increment =()=>{
        setCount(count+1)
    }
    
    const decrement=()=>{
        setCount(count-1)
    }

    return (
        <>
            <h1>counter using use state</h1>
            <p>currently count is {count}</p>
            <button onClick={increment} >increment count:{count}</button>
            <button onClick={decrement}>decrement count:{count}</button>
        </>
    )

}


export default Counter