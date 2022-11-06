
import React, { createContext, useState } from 'react'

export const AuthContextProvider = createContext() ;
export const AuthContext = ({children}) => {
    const [privacy, setPrivacy] = useState(false) ;

const loginSuccess = () => {
     setPrivacy(true)
}
const logoutPage = () => {
  setPrivacy(false)
}

  return (
    
      <AuthContextProvider.Provider value={{loginSuccess, privacy, logoutPage}}>{children}</AuthContextProvider.Provider>
    
  )
}

export default AuthContext
