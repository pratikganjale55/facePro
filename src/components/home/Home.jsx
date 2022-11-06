import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContextProvider } from '../authContext/AuthContext';
import ContactList from '../contactList/ContactList';
import Login from '../login/Login';
import "./home.css" ;

const Home = () => {
  const {privacy} = useContext(AuthContextProvider) ;
  const {logoutPage} = useContext(AuthContextProvider) ;
  const navigate = useNavigate()
  const handleLogout = () => {
      logoutPage()
  }
  return (
    <div className='contactContainer'>
        <div className='contactNavbar'>
          {  
          privacy ?<div className='logoutButton' onClick={handleLogout} style={{cursor: "pointer"}}>Logout</div> : ""
         }
        </div>
        <hr className='horizontalLine'/>
        <div>
            {
              privacy ? <h1><ContactList/></h1> : <Login/>
            }
        </div>
      
    </div>
  )
}

export default Home
