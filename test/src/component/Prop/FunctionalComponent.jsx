// function as prop
// child component

const RenderProp =(prop)=>{
    return(
        <>
            <h1>
                function as prop
            </h1>
            <button onClick={() => prop.onclick(prop.count) }>{prop.count}</button>
        
        </>

    )
}

export default RenderProp