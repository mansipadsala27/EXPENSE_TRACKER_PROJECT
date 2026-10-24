import React, { useEffect, useState } from 'react'
import { Link, Navigate, replace, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const navigate=useNavigate()

   const [formdata,setFormData]=useState({
      name:'',
      email:'',
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
  const {user,setUser}=useAuth()

   const handleSubmit=async(e)=>{
    e.preventDefault()
    // alert("Login succefully")
    
      try{
      let res=await fetch(`http://localhost:8000/users?email=${formdata.email}`,{
        headers:{
          'conternt-type':'application/json'
        },
        method:'GET',         

      })
      let result= await res.json()
      // console.log(result);
      
      if(result.length > 0 &&  result[0].email==formdata.email && result[0].password==formdata.password){        
        let storeuser=result[0]
        localStorage.setItem('loginUser',JSON.stringify(storeuser))
      
        setUser(storeuser)
        if(storeuser?.role=="admin"){
            alert("Login Successfully")
              navigate('/admindash',{replace:true})
        }
        else{
          navigate('/userdash')
        }
      }
      else{
        alert("Invalid email or password")
      }
    }
    catch(err){
      console.log(err);
      return false
      
    }
  }
  return (
    <div align="center">
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <p>
          Email :
          <input type="text" name='email' placeholder='Enter email' onChange={handleChange} />
          </p>        
          <p>
            password:
            <input type="text" name='password' placeholder='Enter Password ' onChange={handleChange}/>
          </p>
          <p>
            <button>Login</button>
          </p>
          <p>
            <span>Create a new account ?</span>
            <Link to={'/reg'}> sign up</Link>
          </p>
      </form>
    </div>
  )
}

export default Login
