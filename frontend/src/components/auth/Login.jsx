import React, { useState } from 'react'

const Login = () => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
const[show, setShow] = useState();

  return (
    <div className='form-container'>
        <form action="">
            <h2>Log In Now</h2>
            <div className="form-control">
                <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type={show? "text" : "password" } placeholder='Enter Email' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <span onClick={()=>{setShow(!show)}}>{show?"Hide":"Show"}</span>
            </div>


        <div className="btn-box">
            <button type='submit'>Log In</button>
            <button type='submit'>Get Correct User Credentials</button>
        </div>
        </form>
    </div>
  )
}

export default Login