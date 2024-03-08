import React from 'react'
import appWriteService from "../appwrite/appwriteConfig"
import { Link } from 'react-router-dom'

const PostCard = ({ $id  , title  , content , featuredImage}) => {
  return (
    //  to make card clickable and go to  particular url we are using link. if user click on img he will  open that post detaisl

       <Link to = {`/post/${$id}`}>
           <div className='w-full bg-purple-300 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
          <img src={appWriteService.getFilePreview(featuredImage) } alt={title}  className='rounded-xl'/>
          </div>
          <h2 className='text-xl font-bold'> {title}</h2>
          </div>
       </Link>
  )
}

export default PostCard