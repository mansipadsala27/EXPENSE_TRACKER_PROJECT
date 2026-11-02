import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Regestration from "./Pages/Regestration";
import AdminDashboard from "./Pages/AdminDashboard";
import UserDashboard from "./Pages/UserDashboard";
import Protected from "./Protected/Protected";
import Addexpense from "./Pages/Addexpense";
import All_transactions from "./Pages/All_transactions";
import Profile from "./Pages/Profile";
import AllUsers from "./Pages/Alluser";
import Allusers_transaction from "./Pages/Allusers_transaction";
import Adminprofile from "./Pages/adminprofile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Regestration />} />

        <Route element={<Protected role="admin" />}>
          <Route path="/admindash" element={<AdminDashboard />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route
            path="/alluserstransactions"
            element={<Allusers_transaction />}
          />
          <Route path="/adminprofile" element={<Adminprofile />} />
        </Route>

        <Route element={<Protected role="user" />}>
          <Route path="/userdash" element={<UserDashboard />} />
          <Route path="/addexpense" element={<Addexpense />} />
          <Route path="/alltransactions" element={<All_transactions />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
