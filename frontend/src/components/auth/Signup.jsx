
import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);


    const [isLoading, setIsLoading] = useState(false);

    // Cloudinary Upload Functionality
    const handleImageChange = async (e)=>{
        const file = e.target.files[0];
        if(!file) return;

        setIsLoading(true);
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "MERNChatApp");
        data.append("cloud_name", "djoruflrl");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/djoruflrl/image/upload", {
                method: "POST",
                body: data
            });
            const result = await response.json();
            setPic(result.secure_url);
            console.log("Image uploaded successfully:", result.secure_url);
            setIsLoading(false);
        } catch (error) {
            console.error("Error uploading image:", error);
            setIsLoading(false);
        }

        console.log("Image uploaded:", pic);
        console.log("Image URL:", pic);
    }

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
                <input type="file" placeholder=''  onChange={handleImageChange} />
                {isLoading ? <p>Uploading...</p> : pic && <img src={pic} alt="Uploaded" style={{width: "50px", height: "50px"}} />}
            </div>

            <div className="btn-box">
                <button type='submit'>Sign Up</button>
            </div>
        </form>
       </div>
    )
}

export default Signup