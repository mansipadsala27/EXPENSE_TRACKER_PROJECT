import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Regestration from "./Pages/Regestration"
import AdminDashboard from "./Pages/AdminDashboard"
import UserDashboard from "./Pages/UserDashboard"
import Protected from "./Protected/Protected"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login/>}></Route>
      <Route path="/reg" element={<Regestration/>}></Route>

     <Route element={<Protected/>}>
       <Route path="admindash" element={<AdminDashboard/>}></Route>
     </Route>
     
      <Route path="/userdash" element={<UserDashboard/>}></Route>
      

    </Routes>
    </BrowserRouter>
  )
}

export default App
