import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    name: '',
    email:'',
    token:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setAuth: (state) => {
            state.isAuthenticated = true;
        },
        setUser: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action)=>{
            state.token = action.payload
        }
    }
});



export const { setEmail,setToken, setAuth, setUser } = userSlice.actions;

export default userSlice.reducer;
