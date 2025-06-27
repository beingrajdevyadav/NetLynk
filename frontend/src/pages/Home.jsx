import React, { useEffect, useState } from 'react'
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [isLog, setIsLog] =  useState(true);

  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/chats");
    }
  })
  return (
    
<>
<div className="home">
 
  <div className="home-container">

     <div className="home-header">
    <h1>NetsApp</h1>
  </div>
  <div className="home-controls">
    <button onClick={()=>setIsLog(true)}>Log In</button>
    <button onClick={()=>setIsLog(false)}>Sign Up</button>
  </div>


    {isLog?<Login /> :<Signup />  }
  </div>


</div>

</>
  )
}

export default Home