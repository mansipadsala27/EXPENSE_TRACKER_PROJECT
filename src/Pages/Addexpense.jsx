import React, { useState } from 'react'
import Usersidebar from '../component/User/Usersidebar'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const Addexpense = () => {
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
        
        alert("Expense added")
        let obj={
            userId:user?.id,
            title:formdata?.title,
            amount:formdata?.amount,
            type:formdata?.type,

        }
        try{
            let res= await fetch(`http://localhost:8000/expenses`,{
                headers:{
                    'Content-type':'applicaton/json'
                },
                method:"POST",
                body:JSON.stringify(obj)
            })
            let result= await res.json()
            
        }
        catch(err){
            console.log(err);
            return false
            
        }
        navigate(`/userdash`)

    }
  return (
     <div className="d-flex">
          
         <Usersidebar></Usersidebar>    
          
          <div className="flex-grow-1 p-4">
            <h2 className="mb-4">Add expenses</h2>
            
              <form onSubmit={handleSubmit}>
               <p>
                 <select name="type" onChange={handleChange}>
                    <option value="select type">
                        Select type
                    </option>
                    <option value="expense">
                        Expense
                    </option>
                    <option value="income">
                        Income
                    </option>
                </select>
               </p>
                
                <p>
                    <label htmlFor="title">Title :- </label>
                    <input type="text" name='title' placeholder='Enter title' onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="amount">Amount :- </label>
                    <input type="text" name='amount' placeholder='Enter amount' onChange={handleChange}/>
                </p>
                <p>
                    <button>Submit</button>
                </p>

            </form>
          </div>

        </div>
  )
}

export default Addexpense
