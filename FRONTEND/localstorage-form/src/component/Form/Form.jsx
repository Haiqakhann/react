
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ()=>{

    
    localStorage.setItem('userInfo',
    JSON.stringify(
        {
            email:"haiqa@gmail.com",
            password:"123asd"
        }
    )
)
    const navigate = useNavigate()
    const [formdata , setFormData] = useState(

        {
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
        localstorage(formdata)

        setFormData(
            {
                email:"",
                password:""
            }
        )
        
    }

    const localstorage=(formdata)=>{
        const item = JSON.parse(localStorage.getItem('userInfo'))
        if(item.email === formdata.email){
            if(item.password === formdata.password){
                navigate('/loggedin')                
            }
            else{
                alert('in correct password')
            }
        }
        else{
            alert('no such account exist')
        }
    }




    return(
        <>
            <form onSubmit={onsubmit}>
                <input type="text" value={formdata.email} name="email" placeholder ="enter email here" onChange={onchange}/>
                <input type="password" value={formdata.password} name="password" placeholder ="enter password here" onChange={onchange}/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Register




