
import React from "react";
import {
  LayoutDashboard,
  Users,
  Tags,
  Receipt,
  ChartNoAxesCombined,
  UserRound,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Usersidebar = () => {
const navigate=useNavigate()
const {user,setUser}=useAuth()

let uname=user?.name || null

const handleLogout=()=>{
 localStorage.removeItem('loginUser')
 setUser(null)
 
  navigate('/',{replace:true})
}
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Receipt size={24} />
        </div>

        <div>
          <h3>{uname}</h3>
          <h3>Expense Tracker</h3>
          <p>User Panel</p>
        </div>
      </div>

      <p className="sidebar-heading">MAIN MENU</p>

      <nav className="sidebar-menu">
    
        <Link to={`/userdash`} className="sidebar-link active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </Link>

       <Link className="sidebar-link">
          <Users size={19} />
          <span>Users</span>
        </Link>


        <Link to={`/addexpense`} className="sidebar-link">
          <Tags size={19} />
          <span>Add expenses </span>
        </Link>

        <Link to={`/alltransactions`} className="sidebar-link">
          <Receipt size={19} />
          <span>All Transactions</span>
        </Link>


        <Link className="sidebar-link">
        <ChartNoAxesCombined size={19} />
          <span>Reports</span>
        </Link>

        <Link className="sidebar-link">
        <UserRound size={19} />
          <span>Profile</span>

        </Link>
      </nav>

      <div className="sidebar-bottom">
        <button
          className="sidebar-link logout-link"
          onClick={handleLogout}
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Usersidebar;
