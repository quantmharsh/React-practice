import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from './context'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos  , setTodos]=useState([]);
  // using callback here (prev)=>[] because we have to add new todo in old list of todos
  const addTodo=(todo)=>{
    //using spread operator to add todo into previous todo
    setTodos( (prev)=> [ {id: Date.now()  , ...todo} , ...prev]);
  }
  //multiple callbacks are used here  1. (prev)=>prev.map()   2. (prevTodo)=>(prevtp.is==id?todo;prevtodo)
  const updateTodo=( id , todo)=>{
    setTodos( (prev)=> prev.map( (prevTodo )=> (prevTodo.id === id ? todo : prevTodo)) )

  }
  const deleteTodo=(id)=>{
     setTodos( (prev)=> prev.filter((todo)=>todo.id !==id ))
  }
  const toggleComplete=(id)=>{
    setTodos( (prev)=> prev.map( (prevTodo)=> prevTodo.id=== id ? {...prevTodo , completed: !prevTodo.completed}:prevTodo))
  }

  // use effect to   get items from localstorage when we refresh a page 
  useEffect(() => {
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0 )
    {
      setTodos(todos)
    }
  }, [])
  //use effect to  set items into localstorage. we require dependency array. we will update todo list whenever
  //we are adding  new todo into it
  useEffect(() => {
     localStorage.setItem("todos" ,JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos , addTodo , deleteTodo , updateTodo , toggleComplete}} >
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map( (todo)=> (
                          <div className='w-full' key={todo.id}>
                            <TodoItem todo={todo}/> 

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
