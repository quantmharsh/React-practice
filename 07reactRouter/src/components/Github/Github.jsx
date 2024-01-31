import React, { useState ,useCallback ,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';


const Github = () => {
  const data=useLoaderData();
  // const[data ,setData]=useState('');
  // useEffect(() => {
  //   fetch('https://api.github.com/users/quantmharsh')
  //   .then(response=> response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  
  
  // }, [])
  
  return (
    <div>Github followers :  {data.followers}
    <img className='' src={data.avatar_url} width={300} alt="Github-pic"/>
    </div>
  )
}
//using this for loader

export default Github
export const githubInfoLoader=async()=>
{
 const response = await   fetch('https://api.github.com/users/quantmharsh')
 console.log("reading respone" ,response)
  return response.json()
}