import React, { useEffect, useState } from "react";
import Usersidebar from "../component/User/Usersidebar";
import { useAuth } from "../context/AuthContext";
import "../css/All_transactions.css";

const All_transactions = () => {
  const { user } = useAuth();

  const [users, setUsers] = useState([]);

  const fetchalldata = async () => {
    try {
      let res = await fetch(`http://localhost:8000/expenses`, {
        headers: {
          "Content-type": "applicaton/json",
        },
        method: "GET",
        body: JSON.stringify(),
      });
      let result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const getdata = async () => {
    try {
      let data = await fetchalldata();

      let userdata = data.filter((item) => {
        return item.userId == user?.id;
      });
      setUsers(userdata);
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  return (
    <div className="d-flex">
      <Usersidebar></Usersidebar>

      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">All Transactions</h2>
       <div className="transactions-table-container">
  <table className="transactions-table">
    <thead>
      <tr>
        <th>Sr. No.</th>
        <th>Title</th>
        <th>Amount</th>
        <th>Type</th>
      </tr>
    </thead>

    <tbody>
      {users.length > 0 ? (
        users.map((item, i) => (
          <tr key={item.id ?? i}>
            <td>{i + 1}</td>
            <td>{item.title}</td>
            <td>₹{Number(item.amount).toLocaleString("en-IN")}</td>
            <td>
              <span
                className={`transaction-type ${
                  item.type === "income"
                    ? "transaction-income"
                    : "transaction-expense"
                }`}
              >
                {item.type}
              </span>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="no-transactions">
            No transactions found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default All_transactions;
