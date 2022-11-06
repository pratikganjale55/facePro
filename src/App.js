
import { Route, Routes } from 'react-router';
import './App.css';
import PrivateContext from './components/authContext/PrivateContext';
import ContactList from './components/contactList/ContactList';

import Home from './components/home/Home';
import Login from './components/login/Login';



function App() {
  return (
  <>
  
    <div className='App'>
      <Routes>
         <Route path='/' element={
          
            <Home/>
          
         
         }/>
         <Route path='/login' element={<Login/>}/>   
      </Routes>
        
          
    </div>
    
  </>
  );
}

export default App;

