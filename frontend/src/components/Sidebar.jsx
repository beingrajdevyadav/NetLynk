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


    // to handle search input
    const handleSearch = async () => {
        if (!search.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`/api/user/search?query=${search}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            if (data.success) {
                setSearchResult(data.users);
                console.log(data.users)
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='overlay'>
            <div className="sidebar" ref={sidebarRef}>
                <div className="sidebar-header">
                    <h2>Find Your Friends</h2>
                    <hr />
                </div>

                <div className="search-field">
                    <input type="text"value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Here' />
                    <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
                </div>

                <hr />
                <div className="results-list"></div>
            </div>
        </div>
    )
}

export default Sidebar