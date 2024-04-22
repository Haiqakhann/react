import { useState ,useEffect} from "react"
import { auth } from "../../../config/firebase-config";
import { createUserWithEmailAndPassword} from 'firebase/auth'
import {  useNavigate } from "react-router-dom";

const RegisterForm = ()=>{

    const navigate = useNavigate()

    
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
        
        await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
            console.log(`user registered`)
            const user = userCredential.user
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        })
        .catch((e) => {
          console.log(`error while register ${e}`)
        });
       
        setFormdata(
            {
                email:"",
                password:""
            }
        )

    }

    const tologin = ()=>{
        navigate('/login')
    }
    
    return(
        <div>
            <form onSubmit={Onsumbit}>
                <input type="email" name='email' placeholder='enter email' onChange={Onchange} />
                <input type="password" name='password' placeholder="enter password"  onChange={Onchange}  />
                <input type="submit" />
            </form>
            <div>
                    <button onClick={tologin}> 
                        already has an account?
                    </button>
            </div>
        </div>
    )
}

export default RegisterForm