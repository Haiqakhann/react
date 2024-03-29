import { useState } from "react";

const Form = ()=>{

    const [formdata , setFormData] = useState(
        {
            username:"",
            email:"",
            password:""
        }
    );
    
    const onchange=(e)=>{
        const {name,value} = e.target
        setFormData(
            {...formdata ,[name]: value}
            )
    
        }

    const onsubmit = (e)=>{
        e.preventDefault()
    

//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formdata)
//         };


//         fetch('http://localhost:4000/', options)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => console.log(data))
//             .catch(error => console.error(error));
// }

        const options = {
            method : 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formdata)
        }

        fetch('http://localhost:4000',options)
            .then(res=>res.json())
            .then(data=>console.log(`entered data is ${data}`))
            .catch(e=> console.log(`error is ${e}`))        
    }

    return(
        <form onSubmit={onsubmit}>
            <input type="text" name="username" placeholder ="enter username here" onChange={onchange}/>
            <input type="text"  name="email" placeholder ="enter email here" onChange={onchange}/>
            <input type="password" name="password" placeholder ="enter password here" onChange={onchange}/>
            <input type="submit" />
        </form>
    )
}

export default Form