import React from "react"
import Navbar from "./Component/Nav/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Video from "./pages/Video/Video"
import { useState } from "react"
export default function App() {
  const[sidebar,setSidebar]=useState(true);
    return (
        <div>
            <Navbar setSidebar={setSidebar}/>
            <Routes>
              <Route path='/' element={<Home sidebar={sidebar}/>}/>
              <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
            </Routes>
        </div>
    )
}