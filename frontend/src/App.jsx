import { Button, HStack } from "@chakra-ui/react"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"

function App() {


  return (
    <>
      
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/chat" element={<Chat/>} />
</Routes>
    </>
  )
}

export default App
