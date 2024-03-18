import { useEffect , useState } from "react";

const DataFetcher=()=>{
    const [data ,setData] = useState()
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(e=> console.log(`the error is ${e}`))
    }
    )   
    return(
        <>
            <h1>
                Data fetching through useEffect
            </h1>
            <ul>
                {
                data &&
                    data.map((item,key)=>{
                        return(
                            <li key={key}> id:{item.id}, title:{item.title}</li>                            
                        )
                })
            } 
            </ul>

        </>
    )
}

export default DataFetcher