import useLocalStorage from "../../hook/useLocalStorage";
import {useState} from 'react'

const Storage=()=>{
  const [value,setValue]=useState()
    const onchange=(e)=>{

        setValue(e.target.value)
    }
    useLocalStorage(value)

    return(
        <>
        <h1>local storage as custom hook</h1>
        <input type="text" placeholder="enter value to store" onChange={onchange} />
        <p>value from local stroge {value}</p>
        </>
    )
}

export default Storage