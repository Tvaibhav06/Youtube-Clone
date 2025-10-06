import React from "react"
import "./Navbar.css"
import menuicon from "../../assets/menu.png"
import logo from "../../assets/logo2.png"
import search from "../../assets/search.png"
import upload from "../../assets/upload.png"
import notification from "../../assets/notification.png"
import userProfile from "../../assets/jack.png"
import moreicon from "../../assets/more.png"
import Sidebar from "../Sidebar/Sidebar"
import { Link } from "react-router-dom"

export default function Navbar({setSidebar}) {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menuicon} alt="menu" />
                <Link to="/"><img className='yt-logo' src={logo} alt="youtube-logo" /></Link>
            </div>
            
            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                    <input type="text" placeholder='Search' />
                    <img src={search} alt="search" />
                </div>
            </div>
            
            <div className='nav-right flex-div'>
                <img src={upload} alt="upload" />
                <img src={notification} alt="notification" />
                <img src={moreicon} alt="more" />
                <img className='user-icon' src={userProfile} alt="user profile" />
            </div>
        </nav>
    )
}