
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

const Adminsidebar = () => {
const navigate=useNavigate()
const {user,setUser}=useAuth()

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
          <h3>Expense Tracker</h3>
          <p>Admin Panel</p>
        </div>
      </div>

      <p className="sidebar-heading">MAIN MENU</p>

      <nav className="sidebar-menu">
        <a href="#dashboard" className="sidebar-link active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a href="#users" className="sidebar-link">
          <Users size={19} />
          <span>Users</span>
        </a>

        <a href="#categories" className="sidebar-link">
          <Tags size={19} />
          <span>Categories</span>
        </a>

        <a href="#transactions" className="sidebar-link">
          <Receipt size={19} />
          <span>All Transactions</span>
        </a>

        <a href="#reports" className="sidebar-link">
          <ChartNoAxesCombined size={19} />
          <span>Reports</span>
        </a>

        <a href="#profile" className="sidebar-link">
          <UserRound size={19} />
          <span>Profile</span>
        </a>
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

export default Adminsidebar;
