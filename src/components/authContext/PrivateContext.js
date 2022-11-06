import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { AuthContextProvider } from './AuthContext'

const PrivateContext = ({children}) => {
const navigate = useNavigate() ;
  const {privacy} = useContext(AuthContextProvider)
  if(!privacy) {
   return navigate("/login")
  }
  return  children
}

export default PrivateContext ;
