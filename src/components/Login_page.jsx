import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth_context";

const Login_page = () => {

  const {setIsAuthenticated} = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const login_usr = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify({ email: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(response => response.json()).then(data => {
      if (data.status != "error") 
        { localStorage.setItem('token', data.token);

          setIsAuthenticated(true);
;
         }

      else {  
    alert(data.message)
  }
      console.log(data)
      

  })
  }




return (
  <div>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={login_usr}>Login</button>
      <button onClick={() => navigate("/signup")}>Signup</button>
    </form>
  </div>
)

}
export default Login_page