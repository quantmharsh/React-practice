import React  from 'react'

import { useState } from 'react'
import {useDispatch} from 'react-redux'

import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
    //state to manage input
    const [input, setInput] = useState('')
    const dispatch= useDispatch();
//adding todo to list using  ReduxStore
    const addTodoHandler=(e)=>{
        e.preventDefault();
        //dispatch(Reducer name (value))
        dispatch( addTodo(input))
        setInput('');

    }
    
    
  return (
    <form  className="flex" onSubmit={addTodoHandler}>
    <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value) }
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
    </button>
</form>
  )
}

export default AddTodo