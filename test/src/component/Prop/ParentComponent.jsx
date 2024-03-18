
// component as prop
// child component

const ChildComponent =(prop)=>{
    return(
        <>
            <h1>
                component as prop
            </h1>
            <input type="text" placeholder={prop.message} />
        
        </>
    )
}

export default ChildComponent