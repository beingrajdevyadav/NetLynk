import React, { useEffect, useRef } from 'react'
import "../css/sidebar.css"
const Sidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef();

    useEffect(() => {
        const handleclickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleclickOutside);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("mousedown", handleclickOutside);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return (
        <div className='overlay'>
            <div className="sidebar" ref={sidebarRef}>
                <div className="sidebar-header">
                    <h3>Search New Users</h3>
                    <hr />
                </div>

                <div className="search-field">
                    <input type="text" placeholder='Search Here' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="results-list"></div>
            </div>
        </div>
    )
}

export default Sidebar