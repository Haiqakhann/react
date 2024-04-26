import { DashboardC } from "../component/Firebase/auth/Dashboard"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
const Dashboard = ()=>{
    return(
        <>
            <DashboardC/>
            <Link to='employee'>Crud</Link>
            <Link to='upload'>UploadFile</Link>
            <Link to='display'>DisplayFile</Link>
            <main>
                <Outlet/>
            </main>           
        </>

    )
}

export default Dashboard