import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup_page = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signup_usr = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/signup', {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password, name: name }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(response => response.json()).then(data => {
      if (data.status != "error") { localStorage.setItem('token', data.token) }
      else {
        alert(data.message)
      }
      console.log(data)
    })
  }


 const navigate = useNavigate()
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={signup_usr} type="submit">Signup</button>
      </form>
     
      <button onClick={() => navigate("/")}>Back to Login</button>
    </div>
  )
}
export default Signup_page