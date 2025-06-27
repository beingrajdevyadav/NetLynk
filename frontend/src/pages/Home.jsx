import React, { useEffect } from 'react'

import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/chats");
    }
  })
  return (
    
<>
<Login />
<Signup />
</>
  )
}

export default Home