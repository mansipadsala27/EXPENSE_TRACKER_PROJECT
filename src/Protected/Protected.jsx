import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const Protected=()=>{
    const {user}=useAuth()
    
        if(!user  || user.role!="admin"){
            
            alert("you can not access admin dashboard")
            return <Navigate to={`/`} replace/>
        }
    
    return <Outlet/>
}
export default Protected