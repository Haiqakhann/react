import { useLoaderData } from "react-router-dom"


const Github = () =>{
    
    const data = useLoaderData()
    
    return(
        <>
            <h1>
                name : {data.name}
            </h1>
            <h2>
                public repositories: {data.public_repos}
            </h2>
        </>
    )

}

const LoaderData = async () => {
    const response = await fetch('https://api.github.com/users/haiqakhann')
    return response.json()
}
// const LoaderData = ()=>{
//     fetch('https://api.github.com/users/haiqakhann')
//         .then((res) => {return res.json()})
// }

export { Github ,LoaderData}   