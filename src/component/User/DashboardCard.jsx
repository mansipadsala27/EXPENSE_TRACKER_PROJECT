import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  FaRupeeSign,
  FaWallet,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import "../../css/DashboardCard.css";
import { useDispatch, useSelector } from 'react-redux';
import { setexpenses } from '../../features/expenseslice';

const DashboardCard = () => {
  const dispatch=useDispatch()
  const expense = useSelector((state) => state.expenses.expenses);
  console.log("Redux expense:", expense);
console.log("Is Array:", Array.isArray(expense));

  const { user } = useAuth();

  useEffect(() => {
    // if (!user?.id) return;

    const fetchExpense = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/expenses?userId=${user.id}`
        );


        const result = await response.json();
        dispatch(setexpenses(result))
      } catch (err) {
        console.log(err);
      }
    };

    fetchExpense();
  }, [user?.id,dispatch]);


  // ------------------------=-----------------------expenses 
const expenserecord = expense.filter(
  (item) => item.type === "expense"
);
let totalexpense=expenserecord.reduce((total,item)=>{
  return total+Number(item.amount)
},0)



// ---------------------------------------------------income
const incomerecord=expense.filter((item)=>{
  return item.type=="income"
})
let totalincome=incomerecord.reduce((total,item)=>{
  return total+Number(item.amount)
},0)

let totalbalance=totalincome-totalexpense
// console.log(totalbalance);

  return (
    <div className="summary-grid">

      {/* Total Income */}
      <div className="summary-card income-card">
        <div className="summary-card-top">
          <div>
            <p className="summary-label">Total Income</p>
            <h3 className="summary-amount">
              <FaRupeeSign />
              {totalincome.toLocaleString('en-IN')}
            </h3>
          </div>

          <div className="summary-icon income-icon">
            <FaArrowDown />
          </div>
        </div>

        <div className="summary-footer">
          <span className="summary-dot"></span>
          Money received
        </div>
      </div>

      {/* Total Expenses */}
      <div className="summary-card expense-card">
        <div className="summary-card-top">
          <div>
            <p className="summary-label">Total Expenses</p>
            <h3 className="summary-amount">
              <FaRupeeSign />
              {totalexpense.toLocaleString('en-IN')}
            </h3>
          </div>

          <div className="summary-icon expense-icon">
            <FaArrowUp />
          </div>
        </div>

        <div className="summary-footer">
          <span className="summary-dot"></span>
          Money spent
        </div>
      </div>

      {/* Total Balance */}
      <div className="summary-card balance-card">
        <div className="summary-card-top">
          <div>
            <p className="summary-label">Total Balance</p>
            <h3 className="summary-amount">
              <FaRupeeSign />
              {totalbalance.toLocaleString('en-IN')}
            </h3>
          </div>

          <div className="summary-icon balance-icon">
            <FaWallet />
          </div>
        </div>

        <div className="summary-footer">
          <span className="summary-dot"></span>
          Available balance
        </div>
      </div>

    </div>
  );
};

export default DashboardCard;