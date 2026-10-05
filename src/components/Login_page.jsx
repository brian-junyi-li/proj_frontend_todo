import { useState, useRef, useEffect } from "react";

const Login_page = () => {

 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
    })
  }
  console.log(data)



    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={login_usr}>Login</button>
            </form>
        </div>
    )
}
export default Login_page