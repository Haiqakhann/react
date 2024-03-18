import { useState,useEffect } from "react"

const  useLocalStorage=(input)=>{
    const [data, setData] = useState(input)

    useEffect(()=>{
        localStorage.setItem('username',JSON.stringify(data))
        setData(localStorage.getItem('usename'))
        console.log(data)
    },[data])

    return(
        data
    )


}

export default  useLocalStorage