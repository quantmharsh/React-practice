import react from 'react'
import {useContext , createContext} from "react";
export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Learn React.js",
            completed:false
        }
    ], 
    addTodo:(todo)=>{},
    updateTodo:(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})
export const  TodoProvider= TodoContext.Provider;
export const   useTodo=()=>{
    return useContext(TodoContext) ;
}