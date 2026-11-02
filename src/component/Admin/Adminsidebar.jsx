import React from "react";
import {
  LayoutDashboard,
  Users,
  Tags,
  Receipt,
  UserRound,
  LogOut,
} from "lucide-react";

import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Adminsidebar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    setUser(null);
    navigate("/", { replace: true });
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Receipt size={24} />
        </div>

        <div>
          <h3>{user?.name}</h3>
          <h3>Expense Tracker</h3>
          <p>Admin Panel</p>
        </div>
      </div>

      <p className="sidebar-heading">MAIN MENU</p>

      <nav className="sidebar-menu">
        <NavLink to="/admindash" className="sidebar-link">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/allusers" className="sidebar-link">
          <Tags size={19} />
          <span>All Users</span>
        </NavLink>

        <NavLink to="/alluserstransactions" className="sidebar-link">
          <Receipt size={19} />
          <span>All Transactions</span>
        </NavLink>

        <NavLink to="/adminprofile" className="sidebar-link">
          <UserRound size={19} />
          <span>Profile</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button className="sidebar-link logout-link" onClick={handleLogout}>
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Adminsidebar;
