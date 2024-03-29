import React from 'react'
import { useState , useEffect  } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'


const Protected= ({children , authentication}) => {
    const[loader , setLoader]=useState(true);
    const navigate= useNavigate();
      const authStatus=useSelector(state=> state.auth.status);
      useEffect(() => {
        if(authentication && authStatus !==authentication)
        {
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication)
        {
            navigate('/')
        }
        
      }, [authStatus ,navigate  , authentication])
      

  return (
    <div>AuthLayout</div>
  )
}

export default Protected