import React, { useState } from 'react'
import Usersidebar from '../component/User/Usersidebar'
import { useAuth } from '../context/AuthContext'
import { replace, useNavigate } from 'react-router-dom'
import '../css/Addexpense.css';

import { useDispatch } from 'react-redux';
import { addexpense } from '../features/expenseslice';


const Addexpense = () => {
  const dispatch=useDispatch()

    const [formdata,setFormdata]=useState({
        type:'',
        title:'',
        amount:''
    })
    const {user}=useAuth()
    
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormdata({
            ...formdata,
            [name]:value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        
        let obj={
            userId:user?.id,
            title:formdata?.title,
            amount:formdata?.amount,
            type:formdata?.type,

        }
        try{
            let res= await fetch(`http://localhost:8000/expenses`,{
                headers:{
                    'Content-type':'application/json'
                },
                method:"POST",
                body:JSON.stringify(obj)
            })
            let result= await res.json()
            dispatch(addexpense(result))
            alert("Expense added")
           
            navigate(`/userdash`, {replace:true})
            
        }
        catch(err){
            console.log(err);
            return false
            
        }
        

    }
  return (
  <div className="d-flex">
    <Usersidebar />
<div className="flex-grow-1 p-4">


    <div className="addexpense-content">
      <div className='mb-4'>

      
      <h2>Add Transaction</h2>

      <form className="addexpense-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="type">Transaction Type</label>
          <select
            name="type"
            id="type"
            value={formdata.type}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g. Food, Salary, Shopping"
            value={formdata.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            min="0.01"
            step="0.01"
            value={formdata.amount}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Transaction</button>

      </form>
    </div>
   </div>
    </div>
  </div>
)
}

export default Addexpense
