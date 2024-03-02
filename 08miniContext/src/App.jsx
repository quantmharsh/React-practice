import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
// import Login from './components/Login'
// import Profile from './components/Profile.jsx'
import Loginn from './components/Loginn.jsx';
import Profilee from './components/Profilee.jsx'


function App() {
 

  return (
    < UserContextProvider>
     <h1> React learn</h1>
     <Loginn/>
     <Profilee/>
    </UserContextProvider>
  )
}

export default App
