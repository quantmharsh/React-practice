import React from 'react'
import {useDispatch } from "react-redux"
import  authService  from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
const LogoutBtn = () => {
    const  dispatch =useDispatch();
    //function to handle logout
    const handleLogout=()=>{
        //by using authService.logout()  we will be able to get logged out

   authService.logout()
   //here  we are using .then which  have callback and calling dispatch which will update the 
   //value in our store
   .then( ()=>{
    dispatch(logout())
   })
    }
    
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn