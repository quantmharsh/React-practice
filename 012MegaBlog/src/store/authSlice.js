import { createSlice  , nanoid } from "@reduxjs/toolkit";

const initialState ={
    status: false, 
    userData:null
}

export const authSlice=  createSlice({
    name:"auth",
    initialState,
    reducers:{
        //Action 1
        login:(state ,action )=>{
            state.status=true
            state.userData=action.payload.userData;
        },
        //Action 2 
        logout:(state)=>{
            state.status=false;
            state.userData=null;

        }

    }

})
export const {login  , logout} = authSlice.actions;
export default authSlice.reducer;
