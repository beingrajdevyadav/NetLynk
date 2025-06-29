
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../redux/features/userSlice';

const Signup = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    // const [pic, setPic] = useState();

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const navigate = useNavigate();
    // const [isLoading, setIsLoading] = useState(false);

    // Cloudinary Upload Functionality
    // const handleImageChange = async (e)=>{
    //     const file = e.target.files[0];
    //     if(!file) return;

    //     setIsLoading(true);
    //     const data = new FormData();
    //     data.append("file", file);
    //     data.append("upload_preset", "MERNChatApp");
    //     data.append("cloud_name", "djoruflrl");

    //     try {
    //         const response = await fetch("https://api.cloudinary.com/v1_1/djoruflrl/image/upload", {
    //             method: "POST",
    //             body: data
    //         });
    //         const result = await response.json();
    //         setPic(result.secure_url);
    //         // console.log("Image uploaded successfully:", result.secure_url);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.error("Error uploading image:", error);
    //         setIsLoading(false);
    //     }

    //     // console.log("Image uploaded:", pic);
    //     // console.log("Image URL:", pic);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //  console.log("Form Submitted.");

        // to check if all fields are filled
        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill all the fields");
            return;
        }

        // to check if password and confirm password are same
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // to check if password is less than 6 characters
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        // Here you can add the code to send the data to the server

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post("/api/user", {
                name,
                email,
                password,
                "pic": "https://static.thenounproject.com/png/1743563-200.png"
            }, config);

            console.log("Signup successful:", data);
            // alert("Signup successful! Please login to continue.");
            // localStorage.setItem("userInfo", JSON.stringify(data));
            dispatch(setCurrentUser(data));
            navigate("/chats");
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Error during signup. Please try again.");
        }


    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type={show1 ? "text" : "password"} placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

                    <i onClick={() => { setShow1(!show1) }} className={!show1 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                </div>
                <div className="form-control">
                    <input type={show2 ? "text" : "password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />

                    <i onClick={() => { setShow2(!show2) }} className={!show2 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                </div>
                {/* <div className="form-control">
                <input type="file" placeholder=''  onChange={handleImageChange} />
                {isLoading ? <img src={"https://media.tenor.com/khzZ7-YSJW4AAAAM/cargando.gif"} alt="Select DP" style={{width: "50px", height: "50px"}} /> :  <img src={pic} alt="Uploaded" style={{width: "50px", height: "50px"}} />}
            </div> */}
                <hr />
                <div className="btn-box">
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup