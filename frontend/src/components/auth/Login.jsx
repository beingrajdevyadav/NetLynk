import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState();

    const navigate  = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("form submitted!");
        // to check if all fields are filled
        if (!email || !password) {
            alert("Please fill all the fields");
            return;
        }

        // to check if email is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {    
            alert("Please enter a valid email address");
            return;
        }   

        // to check if password is valid
        if (password.length < 6) {  
            alert("Password must be at least 6 characters long");
            return;
        }

        // Here you can add the code to send the data to the server

        try {
        const config = {
            headers:{
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post("/api/user/login", {email, password}, config);

        console.log("Login successful:", data);
        localStorage.setItem("userInfo", JSON.stringify(data));

        navigate("/chats");
    } catch (error) {
        console.error("Error during login:", error);
        alert("Error during login. Please try again.");
    }
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                
                <div className="form-control">
                    <input type="email" placeholder='Enter Your Email' value={email} autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type={show ? "text" : "password"} placeholder='Enter Password' autoComplete='off' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    
                    <i onClick={() => { setShow(!show) }} className={!show?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i>
                </div>

<hr />
                <div className="btn-box">
                    <button type='submit'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login