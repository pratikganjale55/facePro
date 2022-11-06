import React from 'react' ;
import { useContext } from 'react';
import { Children } from 'react';
import { useState } from 'react';
import { AuthContextProvider } from '../authContext/AuthContext';

import "./Login.css" ;

const Login = () => {
  const [email, setEmail] = useState("") ;
  const [password, setPass] = useState("") ;
    const {loginSuccess } = useContext(AuthContextProvider) ;
    const {privacy} = useContext(AuthContextProvider) ;


    const handleClick = (e) => {
        e.preventDefault() ;
        if(email == "foo" && password == "bar"){
          loginSuccess()
        }else {
           alert("enter valid data")
        }
        
   
    }
  return (
    
    <div className="loginContainer">
      <main className="form-signin w-100 m-auto">
        <form>
            
            <h1 className="h3 mb-3 fw-normal loginText">Login</h1>

            <div class="form-floating mt-2 formInputDiv">
            <input type="email" className="form-control t" id="floatingInput" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mt-2 formInputDiv">
            <input type="password" className="form-control " id="floatingPassword" onChange={(e) => setPass(e.target.value)} placeholder="Password"/>
            <label for="floatingPassword">Password</label>
            </div>

            
            <button className="w-100 btn btn-lg btn-primary mt-3 loginButton" type="submit" onClick={handleClick}>Sign in</button>
        
        </form>
</main>
    </div>
  )
}

export default Login
