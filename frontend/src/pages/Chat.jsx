import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import '../css/chats.css'
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [chatters, setChatters] = useState([]);
  const [chats, setChats] = useState([]);

  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();
  // console.log(currentUser);

  // to fetchChats

// console.log(chats)

  // Fetch chats when the component mounts
  // and whenever currentUser changes
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}` // Assuming you have a token in currentUser
          }
        }
        const { data } = await axios.get('/api/chat', config);
        setChats(data);
        // console.log("Chats fetched:", data);

      } catch (error) {
        console.error("Error fetching chats:", error);
        // Handle error appropriately, e.g., show a notification or alert
      }
    }

    fetchChats();

  }, [chatters, currentUser.token]);

  // Redirect to home if no user is logged in
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
              <i className="fa-solid fa-magnifying-glass" onClick={() => setSidebarOpen(true)}></i>
            </div>

            <div className="bell">
              <i className="fa-solid fa-bell"></i>
            </div>

            <div className="user">
              <img onClick={() => setProfileOpen(true)} src={currentUser.pic} alt="" />
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

            <ul>
              {chats?.map((c, i)=>(
                <li key={i} className="chat-item" onClick={() => console.log(c.users[1]._id)}>
                  <img src={c.users[1].pic} alt={c.users[1].name} />
                  <div className="user-info">
                    <h4>{c.users[1].name}</h4>
                    <p>Last message...</p>
                  </div>
                </li>
                
              ))}
            </ul>
          </div>
          <div className="open-chat"></div>
        </div>

      </div>
      <Profile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}

export default Chat