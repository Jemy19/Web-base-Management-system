import React, {useContext, useState} from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import{useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "./login.css"


const Login = () => {
    const [error,setError] = useState(false)
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)
    
    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
  
        navigate('/')

        })
        .catch((error) => {
        setError(true)  
     });

    }

    

    return(
        <div className = "body">
<div className = "loginBody">
        <h1 style = {{marginBottom:"20px",fontSize: "40px", color:"black",marginTop:"10px"}}className = "loginlabel" >Welcome!</h1>
        <form className="loginForm" onSubmit={handleLogin}>
          <div className="loginContainer">
            <label  className = "loginlabel" htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange = {e => setEmail(e.target.value)}
              className = 'logininput'
              style = {{marginBottom:"20px"}}
            />
          </div>
          <div className="loginContainer">
            <label className = "loginlabel" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange = {e => setPassword(e.target.value)}
              className = 'logininput'
            />
          </div>
          {error ? <p className="error">{error}</p> : null}
          <br/>
            <button className="loginbtn">
              Log In
            </button>        
        </form>
        <br/>
        <span>Need an account? <Link to="/signup">Sign Up</Link></span>
        </div>
        </div>
        )
        
        
}

export default Login 


