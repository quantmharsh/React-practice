import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  const addValue =()=>{
    counter=counter+1;
    setCounter(counter);

  }
  const subValue=()=>{
    counter=counter-1;
    setCounter(counter);
  }

  return (
    <>
    <h1> chai aur react : {counter}</h1>
    <h2> counter value :{counter}</h2>
    <button onClick={addValue}> +</button>
    <br/>
    <button  onClick={subValue}> -</button>
    </>
  )
}

export default App
