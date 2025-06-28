import React, { useEffect, useRef, useState } from 'react'
import "../css/sidebar.css"
const Sidebar = ({ isOpen, onClose }) => {
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
const [loading, setLoading] = useState(false);
const [loadingChat, setLoadingChat] = useState();

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
                    <h2>Find Your Friends</h2>
                    <hr />
                </div>

                <div className="search-field">
                    <input type="text" placeholder='Search Here' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <hr />
                <div className="results-list"></div>
            </div>
        </div>
    )
}

export default Sidebar