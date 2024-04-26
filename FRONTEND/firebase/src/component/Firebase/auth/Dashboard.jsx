import { auth } from "../../../config/firebase-config"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";



const DashboardC = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div>
        <h1>Welcome to React Firebase Auth using email and password</h1>
        <h2>{user && user.email}</h2>

        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}
export {DashboardC}