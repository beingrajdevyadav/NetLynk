// import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import '../css/chats.css'

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
    <>

      <div className='chat-page'>
        <div className="header">
          <div className="title-bar">
            <h2>NetsApp</h2>
          </div>

          <div className="menu-bar">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="bell">
              <i className="fa-solid fa-bell"></i>
            </div>

            <div className="user">
              <img src={currentUser.pic} alt="" />
            </div>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-lists">
            <div className="list-header">
              <h3>My Chats</h3>

              <div className="create-icon">
                <i className="fa-solid fa-plus"></i>
                <span> Create Group </span>
              </div>
            </div>
          </div>
          <div className="open-chat"></div>
        </div>



        <div className="sidedrawer">
          <div className="search-field">
            <input type="text" placeholder='Search Here' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="results-list"></div>
        </div>
      </div>


    </>
  )
}

export default Chat