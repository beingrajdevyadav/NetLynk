import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import "../css/profile.css"

const Profile = ({ isOpen, onClose }) => {
    const profileRef = useRef();
    const currentUser = useSelector((state) => state.user.currentUser);
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
                <div className="profile-pic">
                    <img src={currentUser.pic} alt={currentUser.name} />
                </div>
                <div className="profile-info">
                    <h3>{currentUser.name}</h3>
                    <p>{currentUser.email}</p>
                </div>
                <hr />
                <div className="profile-action">
                  <span>Logout</span>  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>
        </div>
    )
}

export default Profile