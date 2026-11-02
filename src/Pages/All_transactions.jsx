import React, { useEffect, useState } from "react";
import Usersidebar from "../component/User/Usersidebar";
import { useAuth } from "../context/AuthContext";
import "../css/All_transactions.css";
import DashboardCard from "../component/User/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { setexpenses, deleteExpense } from "../features/expenseslice";

const All_transactions = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expenses.expenses);

  useEffect(() => {
    const getdata = async () => {
      try {
        let res = await fetch(`http://localhost:8000/expenses`, {
          headers: {
            "Content-type": "applicaton/json",
          },
          method: "GET",
          body: JSON.stringify(),
        });
        let result = await res.json();

        let userdata = result.filter((item) => {
          return item.userId === user?.id;
        });
        dispatch(setexpenses(userdata));
      } catch (err) {
        console.log(err);
        return false;
      }
    };
    if (user?.id) {
      getdata();
    }
  }, [user?.id, dispatch]);

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
      <Usersidebar></Usersidebar>

      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">My Transactions</h2>
        <DashboardCard></DashboardCard>

        <div className="transactions-table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {expense.length > 0 ? (
                expense.map((item, i) => (
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
                    <td>
                      <button
                        className="transaction-delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
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
