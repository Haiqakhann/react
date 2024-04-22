import { useEffect, useState } from "react"
import { auth } from "../../../config/firebase-config";
import { signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const LoginForm = ()=>{
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    // console.log(token)
    useEffect(()=>{
        if(token) navigate('/')
    },[token,navigate])


    const [formdata, setFormdata] = useState({
        email:"",
        password:""
    });

    const Onchange=(e)=>{
        const {name,value}=e.target
        setFormdata({...formdata ,[name]:value})  
    }


    const Onsumbit  =async  (e)=>{
        e.preventDefault()
        console.log(formdata)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formdata.email, formdata.password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } catch (error) {
            console.log(error)            
        }
       
        setFormdata(
            {
                email:"",
                password:""
            }
        )
    }

    const create = ()=>{
        navigate('/register')
    }


    return(
        <div>
            <form onSubmit={Onsumbit}>
                <input type="email" name='email' placeholder='enter email' onChange={Onchange} />
                <input type="password" name='password' placeholder="enter password"  onChange={Onchange}  />
                <input type="submit" />
            </form>
            <div>
                    <button onClick={create}> 
                        create new account
                    </button>
            </div>
        </div>
    )
}

export default LoginForm