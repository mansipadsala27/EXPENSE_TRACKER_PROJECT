import React, { useEffect } from 'react'
import Usersidebar from '../component/User/Usersidebar'
const All_transactions = () => {
   const fetchalldata=async()=>{
    
     try{
        let res=await fetch(`http://localhost:8000/expenses`,{
                headers:{
                    'Content-type':'applicaton/json'
                },
                method:"GET",
                body:JSON.stringify()
            })
            let result= await res.json()
          return result
    } 
    catch(err){
        console.log(err);
        return false
        
    }
   

   }
   fetchalldata()
   
   
   
  return (
    <div className="d-flex">
      
     <Usersidebar></Usersidebar>    
      
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">All Transactions</h2>
        <table>

        </table>
        
      </div>
   
    </div>
  )
}

export default All_transactions
