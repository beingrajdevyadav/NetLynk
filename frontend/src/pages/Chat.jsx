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
    <div className='chat-page'>
      <div className="header">
        <div className="search-bar"></div>
        <div className="title-bar"></div>
        <div className="menu-bar">
          
        </div>
      </div>
    </div>
  )
}

export default Chat