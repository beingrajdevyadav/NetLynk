import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {clearCurrentUser} from '../redux/features/userSlice'
import "../css/profile.css"

const Profile = ({ isOpen, onClose }) => {
    const profileRef = useRef();

    const currentUser = useSelector((state) => state.user.currentUser);
   const dispatch = useDispatch();
   
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }


        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }
        , [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className='overlay-02'>
            <div className="profile" ref={profileRef}>

                <div className="profile-info">
                    <div className="profile-header">
                        <h3>My Profile</h3>
                        <i className="fa-solid fa-xmark" onClick={onClose}></i>
                    </div>

                    <hr />
                    <div className="profile-pic">
                        <img src={currentUser.pic} alt={currentUser.name} />
                    </div>

                    <h2>{currentUser.name}</h2>
                    <p>{currentUser.email}</p>
                </div>

                <div className="profile-action">
                    <hr />
                    <button onClick={()=>dispatch(clearCurrentUser())}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Logout</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Profile