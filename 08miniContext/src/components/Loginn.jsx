import React ,{useState , useContext } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UserContext';

const Loginn = () => {
    const  [userName, setUserName] = useState('');
    const[password , setPassword]=useState(null);
    // UseContext .....
    const{setUser} =useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName , password});
      
    }
  return (
    <div>
         <h2>login</h2>
         <input type='text' onChange={(e)=>{setUserName(e.target.value)} } value={userName} placeholder='UserName' />  
         <input type ='text' onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Password'/>
         <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Loginn