import React, { useEffect, useState } from "react";
import Adminsidebar from "../component/Admin/Adminsidebar";
import { useAuth } from "../context/AuthContext";
import "../css/All_transactions.css";
import DashboardCard from "../component/Admin/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { setexpenses, deleteExpense } from "../features/expenseslice";

const All_transactions = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expenses.expenses);
  console.log(expense);

  useEffect(() => {
    const getdata = async () => {
      try {
        let res = await fetch("http://localhost:8000/expenses");
        let result = await res.json();

        dispatch(setexpenses(result));

        let userres = await fetch("http://localhost:8000/users");
        let userresult = await userres.json();

        setUsers(userresult);
      } catch (err) {
        console.log(err);
      }
    };

    getdata();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      let res = await fetch(`http://localhost:8000/expenses/${id}`, {
        method: "DELETE",
      });

      dispatch(deleteExpense(id));
      alert("Expense deleted ");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex">
      <Adminsidebar></Adminsidebar>

      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">All Transactions</h2>
        <DashboardCard></DashboardCard>

        <div className="transactions-table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>User</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {expense.length > 0 ? (
                expense.map((item, i) => {
                  const transactionUser = users.find(
                    (u) => String(u.id) === String(item.userId),
                  );

                  return (
                    <tr key={item.id ?? i}>
                      <td>{i + 1}</td>

                      <td>
                        {transactionUser
                          ? transactionUser.name
                          : "Unknown User"}
                      </td>

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

                      <td>
                        <button
                          className="transaction-delete-btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="no-transactions">
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
