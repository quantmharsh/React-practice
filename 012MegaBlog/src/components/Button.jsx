import React from 'react'

//creating a Button component which we will use at multiple places 
const Button = ({Children  ,
  textColor= 'text-white',
  type= 'button',
 bgColor ='bg-blue-600',
 //classsname is empty here and we are spreading the props(all other values that we get as a prop)
className='',
...props}) => {

  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
        {Children}
    </button>
  )
}

export default Button