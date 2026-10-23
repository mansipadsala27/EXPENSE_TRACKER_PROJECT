import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const Protected=()=>{
    const {user}=useAuth()
    
        useEffect(()=>{
            if(!user || user?.role!="admin"){
            
            return <Navigate to={`/`} replace/>
        }
    
        },[])
    return <Outlet/>
}
export default Protected