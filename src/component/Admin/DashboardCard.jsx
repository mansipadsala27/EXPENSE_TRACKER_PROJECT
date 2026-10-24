import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';

const DashboardCard = () => {

  const [users,setuser]=useState([])
  
  
useEffect(()=>{
    const fetchuser=async()=>{
  try{
    let res = await fetch(`http://localhost:8000/users`,{
      headers:{
        'content-type':'application/json'
      },
      method:'GET',

    })
    let result= await res.json()
    setuser(result)
    }
    catch(err){
      console.log(err);
      return false
      
    }
}
fetchuser()

},[])
return (
    <div className="row g-3">

      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h5>Total Users</h5>      
          <h3>{users.length}</h3>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h5>Total Balance</h5>
          <h3>85,000</h3>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm p-3">
          <h5>Total Expenses</h5>
          <h3>25,000</h3>
        </div>
      </div>

    </div>
  );
}


export default DashboardCard
