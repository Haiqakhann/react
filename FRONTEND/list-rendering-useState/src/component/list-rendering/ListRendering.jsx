import { useState } from "react";
import {Each} from "./Each";

const ListRendering = ()=>{    
    const list =[
        {
            "item":"hello"
        },
        {
            "item":"orange"
        },
        {
            "item":"camel"
        },
    ]

    const [value,setValue] = useState("")    
    let [result,setResult] = useState(list)    


    const submit = (e) => { 
        e.preventDefault(); 
        setResult(
            [
                ...result,
                {
                    'item':value
                }
            ]
        ); 
        setValue("")
    } 

    const change = (e) =>{
        setValue(e.target.value)
    }

    
    return(
    <>
        <form onSubmit={submit}>
            <label >enter item to add:</label>
            <input type="text" value={value} onChange={change} />
            <button>submit</button>
        </form>

        <h1>item added are as follows:</h1>
        <ul>
            <Each of={result} render={(obj,index)=>
            <li>{obj.item}</li>
            }/>
        </ul>
    </>
    )
}

export default ListRendering
