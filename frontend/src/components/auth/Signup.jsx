
import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submitted.");
    }
    return (
       <div className='form-container'>
        <form  onSubmit={handleSubmit}>
            <h2>Sign Up Now</h2>

            <div className="form-control">
                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="form-control">
                <input type={show1?"text":"password"} placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <span onClick={()=>setShow1(!show1)}>{show1?"Hide":"Show"}</span>
            </div>
            <div className="form-control">
                <input type={show2?"text":"password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />

                <span onClick={()=>{setShow2(!show2)}}>{show2?"Hide":"Show"}</span>
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