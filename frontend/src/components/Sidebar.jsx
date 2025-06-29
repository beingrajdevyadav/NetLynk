import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import "../css/sidebar.css"
import { set } from 'mongoose';

const Sidebar = ({ isOpen, onClose }) => {
    const currentUser = useSelector(state => state.user.currentUser);


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
        setSearchResult([]);

        if (!search.trim()) {
            setSearchResult([]);
            return;
        }

        try {
            setLoading(true);

            const config = {
                headers: {
                    "Authorization": `Bearer ${currentUser.token}`
                }
            }

            const { data } = await axios.get(`/api/user?search=${search}`, config);
            setLoading(false);
            setSearchResult(data);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    };
    // to handle enter key press

    // to access chat with user
    const accessChat = async (userId) => {
        try {
            setLoadingChat(true);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${currentUser.token}`,
                }
            };

            const { data } = await axios.post("/api/chat", { userId }, config);
            setLoadingChat(false);
            console.log("Chat accessed:", data);
        } catch (error) {
            console.error("Error accessing chat:", error);

        }
    }
    return (
        <div className='overlay'>
            <div className="sidebar" ref={sidebarRef}>
                <div className="sidebar-header">
                    <h2>Find Your Friends</h2>
                    <hr />
                </div>

                <div className="search-field">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Here' />
                    <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
                </div>

                <hr />

                <div className="results-list">
                    <div className={loading ? "loader" : "loader hide"}>

                        <img src="https://i.gifer.com/origin/8b/8b4d5872105584fe9e2d445bea526eb5_w200.gif" alt="loading" />
                    </div>

                    <ul>
                        {!loading && searchResult.length === 0 && search.trim() ? (
                            null
                        ) :
                            (searchResult.map((user) => (
                                <li key={user._id} className="search-item" onClick={() => { accessChat(user._id); onClose(); }}>
                                    <img src={user.pic} alt={user.name} />
                                    <div className="user-info">
                                        <h4>{user.name}</h4>
                                    </div>

                                </li>
                            )))

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar