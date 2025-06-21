import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chat = () => {
    const [data, setData]=useState([]);


    const fetchData = async()=>{

        const data = await axios.get("/api/chat");
        setData(data.data);
    }

   useEffect(()=>{
    fetchData();
   },[])
  return (
    <div>{
        data.map(c=>(
            <h1 key={c.chatName}>{c.chatName}</h1>
        ))
        }</div>
  )
}

export default Chat