import axios from 'axios'
import React, { useEffect } from 'react'

const Chat = () => {
    const fetchData = async()=>{

        const data = await axios.get("/api/chat");
        console.log(data.data);
    }

   useEffect(()=>{
    fetchData();
   },[])
  return (
    <div>Chat</div>
  )
}

export default Chat