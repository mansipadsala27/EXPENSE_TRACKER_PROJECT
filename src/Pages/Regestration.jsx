import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Regestration = () => {
  const navigate=useNavigate()

  const [formdata,setFormData]=useState({
    name:'',
    email:'',
    role:'user',
    password:''
  })

  const handleChange=(e)=>{
    e.preventDefault()
    const{name,value}=e.target
    setFormData({
      ...formdata,
      [name]:value
    })

  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    alert("Regestration succefully")
    
    
    try{
      let res=await fetch(`http://localhost:3000/users`,{
        headers:{
          'conternt-type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(formdata)        

      })
      let result= await res.json()
      

    }
    catch(err){
      console.log(err);
      return false
      
    }


    navigate('/')  
  }


  return (
    <div align="center">
      <h2>Regestration User</h2>
      <form action="" onSubmit={handleSubmit}>
        <p>
          Name :
        <input type="text" name='name' placeholder='Enter name' onChange={handleChange}/>
        </p>
        <p>
          Email :
          <input type="text" name='email' placeholder='Enter email' onChange={handleChange}/>
          </p>        
          <p>
            password:
            <input type="text" name='password' placeholder='Enter Password ' onChange={handleChange}/>
          </p>
          <p>
            <button>Submit</button>
          </p>
          <p>
            <span>Already have an account ? </span>
            <Link to={'/'}>Sign in</Link>
          </p>
      </form>
    </div>
  )
}

export default Regestration
