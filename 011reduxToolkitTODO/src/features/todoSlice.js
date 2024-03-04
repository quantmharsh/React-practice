import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [ { id: 1 , text: "Hello Harsh"}]
}
//we export the initialState that we have created  it is done using createSlice and it takes object
// name here represent name that will be shown on our browser . it is imp to include name

export const todoSlice= createSlice({
    name:"Todo",
    initialState,
    //we have reduceres here.where we have our methods and their definetion also . 
    //every method of state and action . state is the current state and action is the task that we have to do
    reducers:{
        addTodo:(state , action)=>{
            //we are creating a todo object where text is value which we are getting through action (from input field)
            //.payload is a object whichhave.text to get text . we can also use action.payload it will also work
            const todo={
             id : nanoid(),
             text:action.payload.text
            }
            //in current state we are pushing this todo . since it is a array so pushing value into it
            state.todos.push(todo);

        },
        removeTodo:(state , action)=>{
             state.todos =state.todos.filter((todo)=> todo.id !==action.payload.id )

        }
    }
})
//export all methods in reducer individually

export const {addTodo , removeTodo}= todoSlice.actions;
//we have to also export  all the reducers also
export default   todoSlice.reducer;