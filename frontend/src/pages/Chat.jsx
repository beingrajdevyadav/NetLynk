// import axios from 'axios'
import React, { useEffect } from 'react'

import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();
  console.log(currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);
  return (
    <div><h1>Welcome To Chats Page</h1></div>
  )
}

export default Chat