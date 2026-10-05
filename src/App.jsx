import Dashboard from "./components/Dashboard"
import { useState, useEffect } from "react";
import Login_page from "./components/Login_page";
import Signup_page from "./components/Signup_page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  


    

    return ( 
    <>
    <Router>
    <Routes>    
        <Route path="/" element={<Login_page />} />
        <Route path="/signup" element={<Signup_page />} />
        <Route path="/dashboard" element={<Dashboard  />} />
    </Routes>
    </Router>

    </>)
}

export default App

