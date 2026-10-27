import Dashboard from "./components/Dashboard"
import { useState, useEffect } from "react";
import Login_page from "./components/Login_page";
import Signup_page from "./components/Signup_page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { AuthProvider } from "./components/Auth_context";
import ProtectedRoutes from "./Protected_routes";
function App() {
  


    

    return ( 
    <>
    <Router>
        <AuthProvider>
    <Routes>   
        <Route path="/" element={<Login_page />} />
        <Route path="/signup" element={<Signup_page />} />
       
<Route element={<ProtectedRoutes />}>
 <Route path="/dashboard" element={<Dashboard  />} />
</Route>
    </Routes>
        </AuthProvider>
    </Router>

    </>)
}

export default App

