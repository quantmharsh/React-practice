import React, { useState }  from "react";
import UserContext from "./UserContext";
const UserContextProvider=({children})=>{
    //creating all variables , state , methods which we want to use anywhere in a code as a prop
    //this method returns  a {children } which is wrapped inside a Context
    //This all is Required in setting up ContextApi
    const[user , setUser]=useState(null);
    return(
        // passing all  data in val . it has objects
        <UserContext.Provider  value={{ user , setUser}}>
        {children}
        </UserContext.Provider>
    )

}
export  default UserContextProvider;