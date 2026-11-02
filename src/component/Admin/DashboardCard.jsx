import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';

import { useDispatch, useSelector } from 'react-redux';
import { setuser } from '../../features/userslice';
import { setexpenses } from '../../features/expenseslice';
import {
  FaRupeeSign,
  FaWallet,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import "../../css/DashboardCard.css";
const DashboardCard = () => {

  const dispatch=useDispatch()
  const user=useSelector((state)=>state.user.user)
  const expense =useSelector((state)=>state.expenses.expenses)

useEffect(()=>{
    const fetchuser=async()=>{

    try{

    let userres = await fetch(`http://localhost:8000/users`)
    let userResult= await userres.json()

    let expenseres = await fetch(`http://localhost:8000/expenses`)
    let expenseResult= await expenseres.json()

    dispatch(setuser(userResult))

    dispatch(setexpenses(expenseResult))

    }


    catch(err){
      console.log(err);
      return false
      
    }
}
fetchuser()

},[dispatch])

const totaluser=user.length 
// ------------------------=-----------------------expenses 
const expenserecord=expense.filter((item)=>{
  return item.type=="expense"
})
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
   <div className="summary-grid admin-summary-grid">

     {/* Total Balance */}
          <div className="summary-card balance-card">
            <div className="summary-card-top">
              <div>
                <p className="summary-label">Total User</p>
                <h3 className="summary-amount">
                  
                  {totaluser.toLocaleString('en-IN')}
                </h3>
              </div>
    
              <div className="summary-icon balance-icon">
                <FaWallet />
              </div>
            </div>
    
            <div className="summary-footer">
              <span className="summary-dot"></span>
              User Registered
            </div>
          </div>
    

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
}


export default DashboardCard
