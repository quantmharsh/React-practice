import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profilee = () => {
    const {user}= useContext(UserContext);
   if(!user) return <div> User Not Found..</div>
   return <div> Welcome {user.userName} </div>
}

export default Profilee