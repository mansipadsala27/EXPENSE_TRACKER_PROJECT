import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { FaRupeeSign } from 'react-icons/fa';

const DashboardCard = () => {

  const [users,setuser]=useState([])
  const [expense,setExpense]=useState([])
  
  const {user}=useAuth()

useEffect(()=>{
    const fetchuser=async()=>{

    try{

    let expenseres = await fetch(`http://localhost:8000/expenses?userId=${user.id}`)
    let expenseResult= await expenseres.json()
    setExpense(expenseResult)
    
    }


    catch(err){
      console.log(err);
      return false
      
    }
}
fetchuser()

},[])

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
    <div className="row g-2">

    <div className="col-md-4">
        <div className="card bg-success bg-opacity-75  shadow-sm p-2">
          <h5>Total Income</h5>
          <h3><FaRupeeSign /> {totalincome}</h3>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card bg-danger bg-opacity-75  shadow-sm p-2 border-0">
          <h5>Total Expenses</h5>
          <h3><FaRupeeSign />{totalexpense}</h3>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card  bg-info bg-opacity-75 shadow-sm p-2 border-0">
          <h5>Total Balance</h5>
          <h3><FaRupeeSign /> {totalbalance}</h3>
        </div>
      </div>

    </div>
  );
}


export default DashboardCard
