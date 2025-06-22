
import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submitted.");
    }
    return (
       <div className='signup'>
        <form action="" onSubmit={handleSubmit}>
            <h2>Sign Up Form</h2>

            <div className="form-control">
                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type="file" placeholder='' value={pic} onChange={(e)=>{setPic(e.target.value)}} />
            </div>

            <div className="btn-box">
                <button type='submit'>Sign Up</button>
            </div>
        </form>
       </div>
    )
}

export default Signup