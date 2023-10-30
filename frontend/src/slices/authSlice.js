import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  userinfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
    name: 'auth',
    initalState,
    reducers:{
        setCredentials:(state,action)=>{
            state.userinfo = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout: (state, action)=>{
            state.userinfo = null;
            localStorage.removeItem('userInfo');
        }
    }
})
export const {setCredentials,logout} =authSlice.actions;
export default authSlice.reducer