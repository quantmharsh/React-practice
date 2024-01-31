import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Harsh from './components/Harsh/Harsh.jsx'


// const router=createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout/>,
//     // since we have more values for ex home , aboutus
//     children:[
//       //since we can render something on "/" so path is nothing. here we are rendering home
//       {path:"",
//        element:<Home/> },
//        { 
//         //no  need to use / becaue its already present in parent 
//         path:"about",
//         element:<About/>
//        },
//        {
//         path:"contact",
//       element:<Contact/>
//      },
//      {
//       path:"github",
//       element:<Github/>
//      }
//     ]
//   }
// ])
//Another way of doing this

const router= createBrowserRouter(
  createRoutesFromElements(
    //with help of outlet we are able to do this nested components
    <Route path="/" element={<Layout/>} >
      <Route path="" element= { <Home/>}/>
      //since harsh is inside about it will show content of bothb about and harsh
      <Route path="about" element={<About/>}>
      <Route path="harsh"element={<Harsh/>}/>
      </Route>
      //where as harshit will render harsh component alone along with header and footer
      //this we are able to do because of  outlet
      <Route path="about/harshit" element={<Harsh/>}/>
     
      <Route path="contact" element={<Contact/>}/>
      //loader is used. to fetch data immidiatley when we take curson on  button or element at that time
       //only it starts fetching data (before we click on it ). before useeffect as well
      <Route
       loader={ githubInfoLoader}
      path="github" element={<Github/>}/>
      <Route path="user/:userid"element={<User/>}/>
      

    </Route>
  )

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={ router}/>
  </React.StrictMode>,
)
