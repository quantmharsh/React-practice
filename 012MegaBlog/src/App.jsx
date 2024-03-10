import { useEffect, useState } from 'react'
import  authService  from './appwrite/auth'
import React from 'react';
import {  useDispatch } from 'react-redux';
import Header from "./components/Header/Header";
import  Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom'




import {login  , logout} from './store/authSlice';



function App() {
  const dispatch =  useDispatch();
  

 const [loading, setLoading] = useState(true);
useEffect(() => {
  authService.getCurrentUser()
  .then(
    //callback inside .then
    (userData)=>{
      if(userData)
      {
        dispatch(login ({userData}))
      }
      else{
        dispatch( logout())
      }

    }

  )
  .finally(
     ()=>setLoading(false)
  )
  
  
}, [])



  return  !loading ? 
  <div className='min-h-screen flex flex-wrap
   content-between bg-cyan-400
    '>
    <div className='w-full block' > 
    <Header/>
    <main>
    TODO:  <Outlet />
    </main>
    <Footer/>

    </div>
    Test 

  </div> 
  : null
    
}

export default App
